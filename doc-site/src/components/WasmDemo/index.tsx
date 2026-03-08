import React, { useEffect, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

let globalInitialized = false;

// Delay to ensure the canvas is fully mounted in the DOM before Slint initialization.
// 100ms is usually sufficient for React to finish the render cycle and for the browser 
// to accurately report offsetWidth/offsetHeight.
const DOM_READINESS_DELAY_MS = 100;

function SlintDemoInner() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wasmUrl = useBaseUrl('/wasm/rds_wasm_demo.js');
    const instanceKey = useRef(Date.now());

    useEffect(() => {
        let isMounted = true;

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
                }
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
