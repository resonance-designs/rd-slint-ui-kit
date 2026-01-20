import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
let newVersion = process.env.npm_config_bump;

if (!newVersion) {
    const bumpArg = args.find(arg => arg.startsWith('--bump='));
    if (bumpArg) {
        newVersion = bumpArg.split('=')[1];
    }
}

if (!newVersion) {
    console.error('Usage: npm run version --bump=VERSIONNUMBER');
    process.exit(1);
}
const rootDir = process.cwd();

const filesToUpdate = [
    {
        path: 'package.json',
        replace: (content, version) => content.replace(/"version":\s*"[^"]+"/, `"version": "${version}"`)
    },
    {
        path: 'Cargo.toml',
        replace: (content, version) => content.replace(/^version\s*=\s*"[^"]+"/m, `version = "${version}"`)
    },
    {
        path: 'README.md',
        replace: (content, version) => content.replace(/Version-[0-9.]+-orange/, `Version-${version}-orange`)
    },
    {
        path: 'components/index.slint',
        replace: (content, version) => content.replace(/\* Version: [0-9.]+/g, `* Version: ${version}`)
    }
];

filesToUpdate.forEach(file => {
    const filePath = path.join(rootDir, file.path);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const updatedContent = file.replace(content, newVersion);
        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated ${file.path} to ${newVersion}`);
    } else {
        console.warn(`File not found: ${file.path}`);
    }
});
