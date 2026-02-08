import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

/**
 * Runs a shell command with inherited stdio and custom environment.
 */
function run(command, cwd) {
    console.log(`\nExecuting: ${command} in ${cwd || 'root'}`);
    execSync(command, { 
        cwd: cwd ? path.resolve(rootDir, cwd) : rootDir,
        stdio: 'inherit',
        env: { ...process.env, RUST_MIN_STACK: '67108864' }
    });
}

try {
    console.log('Starting deployment process...');

    // 1. Build WASM demo
    run('wasm-pack build --target web --release', 'wasm-demo');

    // 2. Build Docusaurus site
    run('npm run build', 'doc-site');

    // 3. Sync artifacts
    const wasmPkgDir = path.resolve(rootDir, 'wasm-demo/pkg');
    const targetDir = path.resolve(rootDir, 'doc-site/build/wasm');

    console.log(`\nCopying WASM artifacts to: ${targetDir}`);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Using cpSync (available in Node.js 16.7+) to copy the directory
    fs.cpSync(wasmPkgDir, targetDir, { recursive: true, force: true });

    console.log('\nDeployment build complete!');
} catch (error) {
    console.error('\nDeployment failed:', error.message);
    process.exit(1);
}
