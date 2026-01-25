# Changelog

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
