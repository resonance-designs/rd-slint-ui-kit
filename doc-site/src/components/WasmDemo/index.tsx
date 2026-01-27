import React, { useEffect, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

function SlintDemoInner() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wasmUrl = useBaseUrl('/wasm/rds_wasm_demo.js');

    useEffect(() => {
        let isMounted = true;

        async function initWasm() {
            try {
                // @ts-ignore - Dynamic import of the generated JS glue code
                const init = await import(/* webpackIgnore: true */ wasmUrl);
                
                if (!isMounted) return;

                // Initialize the wasm module
                await init.default();
                
                if (!isMounted) return;

                // Start the slint application
                // Note: The function name matches the crate name in snake_case
                init.main();
            } catch (err) {
                console.error('Failed to initialize Slint Wasm:', err);
            }
        }

        initWasm();

        return () => {
            isMounted = false;
        };
    }, [wasmUrl]);

    return (
        <div className={styles.demoContainer}>
            <canvas 
                id="canvas" 
                ref={canvasRef}
                className={styles.demoCanvas}
            />
        </div>
    );
}

export default function SlintDemo() {
    return (
        <BrowserOnly fallback={<div>Loading Demo...</div>}>
            {() => <SlintDemoInner />}
        </BrowserOnly>
    );
}
