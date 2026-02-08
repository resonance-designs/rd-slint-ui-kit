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
                    if (canvasRef.current) {
                        // Ensure canvas internal size matches CSS size for Slint scaling
                        canvasRef.current.width = canvasRef.current.offsetWidth;
                        canvasRef.current.height = canvasRef.current.offsetHeight;
                    }
                    
                    await init.default();
                    globalInitialized = true;
                    // Since the Rust main() is marked with #[wasm_bindgen(start)],
                    // it is automatically called by init.default().
                    // We don't need to call it again here.
                    return;
                }

                if (!isMounted) return;

                // Start the slint application if not already started by the hook
                // or if we are re-mounting.
                timeoutId = setTimeout(() => {
                    if (isMounted && canvasRef.current) {
                        // Ensure canvas internal size matches CSS size for Slint scaling
                        canvasRef.current.width = canvasRef.current.offsetWidth;
                        canvasRef.current.height = canvasRef.current.offsetHeight;

                        try {
                            // Only call main if we're not the first initialization
                            // because the first initialization already called it via #[wasm_bindgen(start)]
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
