use wasm_bindgen::prelude::*;

slint::include_modules!();

#[wasm_bindgen(start)]
pub fn main() {
    console_error_panic_hook::set_once();
    let main_window = DemoWindow::new().unwrap();
    main_window.run().unwrap();
}
