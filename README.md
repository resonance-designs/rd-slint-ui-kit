# Resonance Designs – Slint UI Component Kit

![Static Badge](https://img.shields.io/badge/Version-0.1.14-orange)

A reusable collection of Slint UI components designed for audio tools, sequencers, and creative applications.

Built with a focus on:

- Clean, modern aesthetics
- Audio-centric controls (VU meters, knobs, sequencer cells)
- Dynamic theming support
- Simple integration into existing Slint projects

## Components Included

### `RDSButton`

A standard button component with customizable labeling and styling.

**[Properties]**

- `label: string`
- `active: bool`
- `button-width: length` (Default: `42px`)
- `button-height: length` (Default: `28px`)
- `text-color: color` (Default: `Theme.active.text_primary`)
- `background: color` (Default: `root.active ? Theme.active.accent_primary : Theme.active.background_main`)
- `border-color: color` (Default: `root.active ? Theme.active.accent_primary : Theme.active.border_strong`)
- `border-radius: length` (Default: `Theme.active.radius_medium`)
- `label-padding-top/right/bottom/left: length` (Default: `4px`)

**[Callbacks]**

- `clicked()`
- `pressed()`
- `released()`

**[Example]**

```slint
RDSButton {
    label: "Apply";
    clicked => { do_something(); }
}
```

---

### `RDSSelectButton`

A larger selectable button with active state and shift-click support.

**[Properties]**

- `label: string`
- `active: bool`
- `label-font-family: string`
- `label-elide: bool`
- `button-width: length` (Default: `80px`)
- `button-height: length` (Default: `28px`)

**[Callbacks]**

- `clicked()`
- `shift-clicked()`

**[Example]**

```slint
RDSSelectButton {
    label: "Mute";
    active: is-muted;
    clicked => { is-muted = !is-muted; }
    shift-clicked => { solo_track(); }
}
```

---

### `RDSSequencerCell`

A compact grid cell suitable for step sequencers.

**[Properties]**

- `active: bool`
- `current: bool`
- `edit: bool`
- `cell-width: length` (Default: `20px`)
- `cell-height: length` (Default: `20px`)
- `cell-text: string`
- `cell-text-color: color`
- `cell-text-size: length`
- `cell-text-weight: int`

**[Callbacks]**

- `clicked()`

**[Example]**

```slint
RDSSequencerCell {
    active: step-enabled;
    current: root.playhead == 0;
    clicked => { step-enabled = !step-enabled; }
}
```

---

### `RDSVUMeter` / `RDSVertVUMeter`

Horizontal and vertical VU meters.

**[Properties]**

- `level: float` (0.0 – 1.0 recommended)
- `fill-color: color` (Defaults to `Theme.active.meter_normal`)
- `vu-border-width: length` (Default: `2px`)

**[Example]**

```slint
RDSVUMeter {
    level: left-channel-db;
}
```

---

### `RDSCircleToggle`

A minimal circular toggle indicator with optional labeling.

**[Properties]**

- `active: bool`
- `label: string`
- `label-active: string`
- `label-color: color`
- `label-active-color: color`
- `label-font-size: length`
- `label-font-weight: int`
- `label-pos: string` (Default: "right")

**[Callbacks]**

- `clicked()`

**[Example]**

```slint
RDSCircleToggle {
    active: true;
}
```

---

### `RDSToggle`

A toggle button that displays different Material Icons based on its state.

**[Properties]**

- `active: bool`
- `on-icon: string` (Default: "stop")
- `off-icon: string` (Default: "play_arrow")
- `background: color` (Default: `Theme.active.background_main`)
- `active-background: color` (Default: `Theme.active.accent_primary`)
- `border-color: color` (Default: `Theme.active.border_strong`)
- `active-border-color: color` (Default: `Theme.active.accent_primary`)
- `border-width: length` (Default: `1px`)
- `active-border-width: length`
- `text-color: color` (Default: `Theme.active.text_primary`)
- `icon-color: color` (Defaults to `text-color`)
- `icon-size: length` (Default: `20px`)

**[Callbacks]**

- `clicked()`

**[Example]**

```slint
RDSToggle {
    on-icon: "pause";
    off-icon: "play_arrow";
    active: is-playing;
}
```

---

### `RDSKnob`

A rotary knob supporting bounded and infinite rotation modes.

**[Properties]**

- `value: float`
- `rotation-angle: angle`
- `size: length`
- `indicator-position: length`
- `sensitivity: float`
- `scroll-sensitivity: float`
- `enabled: bool` (Default: `true`)
- `renderer: string` ("hi-fi", "lo-fi")
- `indicator: string` ("circle", "line", "caret")
- `indicator-color: color`
- `min-value: float`
- `max-value: float`
- `label: string`
- `label-pos: string` (Default: "bottom-center")
- `label-txt-color: color`
- `label-bg-color: color`
- `label-font-size: length`
- `label-font-weight: int`
- `infinite-rotary: bool`
- `readout-enabled: bool` (Default: `true`)
- `readout-text: string`
- `readout-mode: string`
- `readout-suffix: string`
- `readout-literals: [string]`
- `readout-pos: string`
- `readout-width: length`
- `readout-height: length`
- `readout-txt-color: color`
- `readout-bg-color: color`
- `readout-font-size: length`
- `readout-font-weight: int`

**[Callbacks]**

- `value-changed(float)`

**[Example]**

```slint
RDSKnob {
    value: 50;
    min-value: 0;
    max-value: 100;
    size: 64px;
    value-changed(v) => { debug("Value: ", v); }
}
```

---

### `RDSSlider`

A versatile slider (fader) supporting vertical and horizontal orientations.

**[Properties]**

- `value: float`
- `min-value: float`
- `max-value: float`
- `size: string` ("small", "medium", "large")
- `orientation: string` ("vertical", "horizontal")
- `height-override: length`
- `drag-sensitivity: float`
- `scroll-sensitivity: float`

**[Callbacks]**

- `value-changed(float)`

**[Example]**

```slint
RDSSlider {
    value: 64;
    min-value: 0;
    max-value: 127;
    orientation: "vertical";
    size: "medium";
}
```

---

### `RDSSimpSlider`

A simple bar slider for step-style controls or compact parameter adjustment.

**[Properties]**

- `value: float` (Default: `0.0`)
- `min-value: float` (Default: `0.0`)
- `max-value: float` (Default: `1.0`)
- `orientation: string` (Default: `"vertical"`)
- `slider-width: length` (Default: `12px`)
- `slider-height: length` (Default: `120px`)
- `background-color: color`
- `fill-color: color`
- `border-clr: color`
- `border-size: length`
- `radius: length`

**[Callbacks]**

- `value-changed(float)`

**[Example]**

```slint
RDSSimpSlider {
    value: 0.5;
    min-value: 0.0;
    max-value: 1.0;
}
```

---

A styled header label with background, padding, and a right-side slot for child components.

**[Properties]**

- `text: string`
- `horizontal-alignment: enum` (Default: `center`)
- `vertical-alignment: enum` (Default: `center`)
- `padding-horizontal: length` (Default: `8px`)
- `padding-vertical: length` (Default: `4px`)
- `right-padding: length` (Default: `8px`)
- `right-gap: length` (Default: `6px`)
- `bg-color: color`
- `txt-color: color`
- `letter-spacing: length`
- `border-r-tl: length`
- `border-r-tr: length`
- `border-r-bl: length`
- `border-r-br: length`

**[Example]**

```slint
RDSHeaderLabel {
    text: "OSCILLATOR 1";
    RDSCircleToggle {
        active: true;
    }
}
```

---

### `RDSComboBox`

A custom dropdown selector with a styled trigger and popup list.

**[Properties]**

- `model: [string]` - List of items to display
- `current-index: int` - Selected index
- `enabled: bool` (Default: `true`)
- `item-height: length` (Default: `28px`)
- `max-visible-items: int` (Default: `6`)
- `background: color`
- `border-color: color`
- `border-width: length`
- `border-radius: length`
- `text-color: color`
- `font-size: length`
- `font-family: string`
- `padding-horizontal: length`
- `padding-vertical: length`
- `popup-background: color`

**[Callbacks]**

- `selected(int)` - Triggered when an item is selected

**[Example]**

```slint
RDSComboBox {
    model: ["Sine", "Saw", "Square", "Noise"];
    current-index: 0;
    selected(idx) => { debug("Selected: ", idx); }
}
```

---

### `RDSNumStepper`

A numeric selector with increment/decrement buttons and an interactive readout. Supports vertical drag, mouse scroll, and double-click for manual entry.

**[Properties]**

- `value: float` (Default: `120`)
- `min-value: float` (Default: `20`)
- `max-value: float` (Default: `300`)
- `step: float` (Default: `1`)
- `font-family: string` (Default: `"DSEG7 Classic"`)
- `readout-background: color`
- `readout-border-color: color`
- `readout-border-width: length`
- `readout-border-radius: length`
- `readout-width: length`
- `readout-height: length`
- `readout-text-color: color`
- `readout-text-size: length`
- `readout-text-weight: int`
- `pad-digits: int` (Default: `3`, max: 3)
- `button-tog: bool` (Default: `true`)
- `allow-editing: bool` (Default: `true`)
- `button-pos: string` ("top-bottom", "left-right")
- `button-y-offset: length` (Default: `0px`)
- `button-width: length` (Default: `24px`)
- `button-height: length` (Default: `24px`)

**[Callbacks]**

- `value-changed(float)`
- `readout-double-clicked()`

**[Example]**

```slint
RDSNumStepper {
    value: 440;
    min-value: 20;
    max-value: 20000;
    button-pos: "left-right";
}
```

---

### `RDSTextStepper`

A stepper component for cycling through a list of string options.

**[Properties]**

- `options: [string]` - List of strings to cycle through
- `index: int` - Currently selected index
- `font-family: string`
- `readout-background: color`
- `readout-border-color: color`
- `readout-border-width: length`
- `readout-border-radius: length`
- `readout-width: length`
- `readout-height: length`
- `readout-text-color: color`
- `readout-text-size: length`
- `readout-text-weight: int`
- `button-tog: bool` (Default: `true`)
- `button-pos: string` ("left-right", "top-bottom")

**[Callbacks]**

- `index-changed(int)`

**[Example]**

```slint
RDSTextStepper {
    options: ["Low", "Medium", "High"];
    index: 1;
    index-changed(i) => { debug("New index: ", i); }
}
```

---

### `RDSXYPad`

A 2D XY pad for controlling two parameters simultaneously.

**[Properties]**

- `value-x: float` (0.0 – 1.0)
- `value-y: float` (0.0 – 1.0)
- `pad-background: color`
- `pad-border-color: color`
- `grid-color: color`
- `handle-color: color`
- `glow-color: color`
- `handle-size: length`
- `border-radius: length`
- `grid-lines: int`

**[Callbacks]**

- `value-x-changed(float)`
- `value-y-changed(float)`

**[Example]**

```slint
RDSXYPad {
    value-x: 0.5;
    value-y: 0.5;
    value-x-changed(x) => { debug("X: ", x); }
    value-y-changed(y) => { debug("Y: ", y); }
}
```

---

### `RDSNumericKeypad`

A numeric keypad for entering values, with committed and cleared callbacks.

**[Properties]**

- `current-value: float`
- `input-text: string`
- `pad-digits: int`
- `allow-negative: bool`
- `num-only: bool`
- `parsed-value: float`

**[Callbacks]**

- `input-changed(string)`
- `committed(float)`
- `cleared()`

**[Example]**

```slint
RDSNumericKeypad {
    current-value: 120.0;
    committed(v) => { debug("Committed: ", v); }
}
```

---

### `RDSKeybed`

A virtual musical keyboard (piano keys).

**[Properties]**

- `octaves: int` (Default: `2`)
- `scale: string` ("chromatic", "major", "minor", "pentatonic", "blues")
- `size: length` (Width of white keys)
- `base-note: int` (MIDI base note, default: `48`)

**[Callbacks]**

- `note-triggered(int)`

**[Example]**

```slint
RDSKeybed {
    octaves: 3;
    base-note: 36;
    note-triggered(n) => { play_note(n); }
}
```

---

### `RDSWaveformViz`

Visualizes a static waveform with an optional playhead, loop regions, and grain markers.

**[Properties]**

- `waveform: [float]` (Amplitude values 0.0 – 1.0)
- `waveform-time-labels: [string]` (Time markers for X-axis)
- `playhead-index: int`
- `loop-enabled: bool`
- `loop-start: float` (0.0 - 1.0)
- `loop-length: float` (0.0 - 1.0)
- `trigger-start: float` (0.0 - 1.0)
- `grain-markers: [float]` (Array of positions 0.0 - 1.0)

**[Example]**

```slint
RDSWaveformViz {
    waveform: [0.1, 0.5, 0.8, 0.4, 0.2];
    waveform-time-labels: ["0s", "1s", "2s", "3s", "4s"];
    playhead-index: 2;
}
```

---

### `RDSOscilloscopeViz`

Visualizes a real-time signal as an oscilloscope trace.

**[Properties]**

- `oscilloscope: [float]` (Signal samples)

**[Example]**

```slint
RDSOscilloscopeViz {
    oscilloscope: [0.0, 0.707, 1.0, 0.707, 0.0, -0.707, -1.0, -0.707];
}
```

---

### `RDSSpectrumViz`

Visualizes frequency spectrum data as vertical bars.

**[Properties]**

- `spectrum: [float]` (Magnitude values per frequency bin)

**[Example]**

```slint
RDSSpectrumViz {
    spectrum: [0.1, 0.2, 0.5, 0.9, 0.4, 0.2, 0.1];
}
```

---

### `RDSVectorscopeViz`

Visualizes phase relationship between two signals (L/R).

**[Properties]**

- `vectorscope-x: [float]` (Left channel signal samples)
- `vectorscope-y: [float]` (Right channel signal samples)

**[Example]**

```slint
RDSVectorscopeViz {
    vectorscope-x: [0.1, 0.2, -0.1];
    vectorscope-y: [0.2, -0.1, 0.3];
}
```

---

## Theming

The library features a centralized theming system using a global `Theme` and `RDSTheme` struct.

### Using Theme Properties

Components automatically use the `Theme.active` values. You can access these in your own components:

```slint
import { Theme } from "rds-slint-ui-kit/theme/index.slint";

Rectangle {
    background: Theme.active.background_main;
    border-radius: Theme.active.radius_medium;
}
```

### Switching Themes at Runtime

Use the `ThemeManager` global to switch between available themes:

```slint
import { ThemeManager } from "rds-slint-ui-kit/theme/index.slint";

// In your UI
Button {
    text: "Switch to Light Mode";
    clicked => { ThemeManager.switch_to_light(); }
}
```

### Creating Custom Themes

1. Define a new file (e.g., `my_theme.slint`).
2. Implement a global that provides `RDSTheme` values:

    ```slint
    import { RDSTheme } from "theme.slint";

    export global MyCustomTheme {
        out property <RDSTheme> values: {
            background_main: #f0f0f0,
            text_primary: #111111,
            accent_primary: #ff5500,
            // ... include all RDSTheme fields
        };
    }
    ```

3. Apply it by setting `Theme.active = MyCustomTheme.values;`.

## Example Usage

```slint
import { RDSKnob, RDSVUMeter, ThemeManager } from "rds-slint-ui-kit/components/index.slint";

VerticalLayout {
    spacing: 20px;

    RDSKnob {
        size: 60px;
        min-value: 0;
        max-value: 127;
    }

    RDSVUMeter {
        level: 0.65;
    }

    Button {
        text: "Switch to Light Mode";
        clicked => { ThemeManager.switch_to_light(); }
    }
}
```

## Documentation

A comprehensive documentation site built with Docusaurus is available in the `doc-site` directory.

### Running the Documentation Site Locally

1. **Install dependencies**:

   ```bash
   cd doc-site
   npm install
   ```

2. **Start the server**:

   ```bash
   npm start
   ```

The documentation includes a **Live Wasm Demo** where you can interact with the components directly in your browser.

### Key Features of the Demo

- **Component Showcase**: Explore all visualizers (Oscilloscope, Spectrum, Vectorscope) and controls.
- **Real-time Theme Switching**: Toggle between Light and Dark modes instantly.
- **Responsive Interaction**: Experience Slint's performance on the web.

## WebAssembly Demo

The library includes a WebAssembly demo that can be run in the browser.

### Building the Demo

1. **Install wasm-pack**: `cargo install wasm-pack`
2. **Add Wasm target**: `rustup target add wasm32-unknown-unknown`
3. **Build**:

    ```bash
    cd wasm-demo
    wasm-pack build --target web
    ```

4. **Run**: Serve the `wasm-demo` directory using a local web server (e.g., `npx serve .`).

## Installation (Planned)

This library is intended to be distributed via:

- npm (for Slint + JS / WASM projects)
- Cargo (for Rust + Slint projects)

## Roadmap

- [x] npm package with .slint exports
- [x] Rust crate wrapping Slint resources
- [x] Theming support
- [x] Demo application using the UI library
- [x] Documentation site & screenshots
- [ ] Additional UI components (Tabs, Menus, specialized visualizers)

## Developer Onboarding

Welcome to the development team of `rds-slint-ui-kit`! This section will help you get your environment set up and understand the development workflow.

### Prerequisites

To contribute to this project, you will need:

- **Rust** (Latest stable version)
- **Slint** (Included as a Cargo dependency, but the Slint extension for your IDE is highly recommended)
- **Node.js** (For documentation site and version management)
- **wasm-pack** (For building the WebAssembly demo)

### Project Structure

- **`components/`**: Core Slint component definitions (`.slint` files).
- **`theme/`**: Centralized theme management and assets (SVG, fonts).
- **`src/`**: Rust library wrapper for the Slint components.
- **`wasm-demo/`**: A standalone Slint project that compiles to WASM for showcasing the toolkit.
- **`doc-site/`**: Docusaurus-based documentation site.
- **`scripts/`**: Utility scripts for maintenance (e.g., versioning).

### Local Development Workflow

#### 1. Validating Component Changes
After modifying any `.slint` files in the `components/` directory, verify that they compile correctly using Cargo:

```bash
cargo check
```

#### 2. Running the WASM Demo
The WASM demo is the primary way to test components in an interactive environment:

```bash
cd wasm-demo
wasm-pack build --target web
# Then serve the wasm-demo directory with a static server
npx serve .
```

#### 3. Working on Documentation
The documentation site is built with Docusaurus and supports live MDX previews:

```bash
cd doc-site
npm install
npm start
```

#### 4. Version Management
We use a custom script to synchronize versions across `package.json`, `Cargo.toml`, and documentation:

```bash
npm run version
```

## License

Copyright © 2026
[Richard Bakos](mailto:info@resonancedesigns.dev) – [Resonance Designs](https://resonancedesigns.dev)
[MIT](LICENSE)
