import React, { useEffect, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

let globalInitialized = false;

function SlintDemoInner() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wasmUrl = useBaseUrl('/wasm/rds_wasm_demo.js');
    const instanceKey = useRef(Date.now());

    useEffect(() => {
        let isMounted = true;
        let timeoutId: NodeJS.Timeout;

        async function initWasm() {
            try {
                // @ts-ignore - Dynamic import of the generated JS glue code
                const init = await import(/* webpackIgnore: true */ wasmUrl);

                if (!isMounted) return;

                // Initialize the wasm module only once
                if (!globalInitialized) {
                    await init.default();
                    globalInitialized = true;
                }

                if (!isMounted) return;

                // Start the slint application
                // Note: The function name matches the crate name in snake_case
                // We use a small timeout to ensure the DOM is ready for Slint to find the canvas
                timeoutId = setTimeout(() => {
                    if (isMounted && canvasRef.current) {
                        // Ensure canvas internal size matches CSS size for Slint scaling
                        canvasRef.current.width = canvasRef.current.offsetWidth;
                        canvasRef.current.height = canvasRef.current.offsetHeight;

                        try {
                            init.main();
                        } catch (e) {
                            console.warn('Slint main execution:', e);
                        }
                    }
                }, 100);
            } catch (err) {
                console.error('Failed to initialize Slint Wasm:', err);
            }
        }

        initWasm();

        return () => {
            isMounted = false;
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [wasmUrl]);

    return (
        <div className={styles.demoContainer} key={instanceKey.current}>
            <canvas
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
