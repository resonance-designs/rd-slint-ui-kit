fn main() {
    println!("cargo:rerun-if-changed=components");
    println!("cargo:rerun-if-changed=theme");
    slint_build::compile("components/index.slint").unwrap();
}
