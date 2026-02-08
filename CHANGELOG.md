# Changelog

## [0.1.14] - 2026-02-08

- Increased stack size for builds.
- Setup GitHub Actions for doc-site automatic deployment to GitHub Pages.
- Fixed typos in GitHub project name and URL.
- **Enhanced `RDSNumericKeypad`**: Simplified it to avoid stackoverflow issues.
- **Enhanced `RDSKeybed`**: 
  - Added "scale masking" (`scale-mask`) prop to highlight/dim various keys of the keybed.
  - Added "scaled dividing" (`scale_divisor`) prop to handle setting scales to the keybed.
- Updated WASM Live Demo of the components
- Created production build scripts (`/scripts/deploy.bat` & `/scripts/deploy.js`) to build the WASM Live Demo, build Docusaurus, then copy the WASM build artifacts to the static Docusaurus build directory.

## [0.1.13] - 2026-02-07

- **New `all_components.slint`**: Created a component in the root of the project that contains all components organized into categories.
- **Enhanced `RDSButton`**: Refined layout logic and removed redundant stretch properties in favor of standard Slint layout behavior. Added `pressed` and `released` callbacks.
- **Enhanced `RDSSelectButton`**: Added `label-font-family` and `label-elide` properties for better text control.
- **Enhanced `RDSSequencerCell`**: Added customizable dimensions (`cell-width`, `cell-height`), text labeling (`cell-text`), and an `edit` state.
- **New Component `RDSTextStepper`**: A stepper component for cycling through string options.
- **Enhanced `RDSWaveformViz`**: Added support for loop regions, trigger points, and grain markers. Renamed properties to kebab-case for consistency.
- **Enhanced `RDSVectorscopeViz`**: Renamed properties to kebab-case.
- **Theming Updates**:
  - Added `ui_device_panel_bg` to `RDSTheme`.
  - Added `is-dark` property to the `Theme` global for easier conditional styling.
- **Documentation**:
  - Updated all component MDX files and root README to reflect the latest property changes and new components.
  - Moved component documentation into category sub-folders and adjusted the navigation to mirror it.
  - Updated the HomepageFeatures component with custom graphics.
  - Updated Web Assembly compoonent gallery/demo.

## [0.1.12] - 2026-01-26

- **Documentation & Wasm Integration**:
  - Migrated entire documentation site to Docusaurus with MDX support.
  - Integrated a live WebAssembly demo directly into the documentation site.
  - Converted all `.md` documentation files to `.mdx`.
  - Resolved multiple broken links and optimized documentation navigation.
- **Wasm Demo**: Added dedicated `wasm-demo/` crate with full toolkit showcase.
- **Enhanced `RDSButton`**: Added `layout-stretch`, `layout-preferred-width`, `pressed`, and `released` properties/callbacks.
- **Enhanced `RDSHeaderLabel`**: Added `border-r-tl/tr/bl/br` and `bg-color` properties for more granular styling.
- **Enhanced `RDSKnob`**: Added full readout support with `readout-enabled`, `readout-mode`, `readout-suffix`, `readout-literals`, and more.
- **Root README**: Updated with documentation site instructions and live demo info.

## [0.1.11] - 2026-01-25

- Added a means to add arbitrary content within the `RDSHeaderLabel` container.
- Updated versioning script (`update-version.js`) to also target the `package.json` of the doc-site.
- Updated documentation.

## [0.1.10] - 2026-01-25

- Added new components:
  - `RDSButton`: A standard customizable button.
  - `RDSXYPad`: A 2D pad for controlling dual parameters.
  - `RDSNumericKeypad`: A full numeric keypad for value entry.
  - `RDSKeybed`: A virtual piano keyboard for MIDI interaction.
- Enhanced existing components:
  - `RDSKnob`: Added a comprehensive labeling system with customizable positioning and styling.
  - `RDSSelectButton`: Added `shift-clicked` support and configurable dimensions.
  - `RDSToggle`: Added more styling properties for background, border, and icons.
  - `RDSNumStepper`: Added `allow-editing` toggle and double-click callbacks.
  - `RDSVUMeter` / `RDSVertVUMeter`: Added `vu-border-width` property.
  - `RDSSlider`: Improved documentation and internal structure.
- Documentation & Distribution:
  - Rewrote internal `.slint` documentation comments for better clarity and tooling support.
  - Fully updated `README.md` with all new components and property details.
  - Updated `Cargo.toml` and `package.json` to ensure all theme assets (fonts, SVGs) are included in releases.

## [0.1.9] - 2026-01-21

- Added documentation for `RDSHeaderLabel` and `RDSComboBox` to `README.md`.
- Fixed syntax error and broken re-exports in `src/lib.rs`.
- Standardized Rust exports to include all public Slint components via `ui` module.
- Verified and updated property/callback documentation for all components.

## [0.1.8] - 2026-01-21

- Added `RDSNumStepper` component in `selectors.slint` with support for:
  - Dynamic button positioning ("top-bottom" or "left-right").
  - Toggleable buttons via `button-tog` property.
  - Interactive readout with vertical drag and mouse scroll support.
  - Manual value entry via double-click.
  - Customizable font family and leading zero padding.
- Added `RDSToggle` component in `toggles.slint` with Material Icons support.
- Updated `StepperButton` to use Material Icons font for arrows.
- Exported `RDSNumStepper` and `RDSToggle` in `index.slint`.
- Updated `README.md` with documentation for new components.

## [0.1.7] - 2026-01-20

- Added new visualization components: `RDSWaveformViz`, `RDSOscilloscopeViz`, `RDSSpectrumViz`, `RDSVectorscopeViz`.
- Merged `meters.slint` into `viz.slint`.
- Added version update script (`npm run version`).
- Standardized and completed documentation comments across all `.slint` components.
- Updated `README.md` with full property lists for all components.

## [0.1.6] - 2026-01-20

- Fixed typo "carrot" to "caret" in `RDSKnob` indicator property.
- Added missing documentation for `RDSKnob` properties (`renderer`, `indicator`, `indicator-color`).
- Updated code comments in `knobs.slint`.
