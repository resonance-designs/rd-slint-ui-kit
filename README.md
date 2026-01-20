# Resonance Designs – Slint UI Component Kit

![Static Badge](https://img.shields.io/badge/Version-0.1.7-orange)

A reusable collection of Slint UI components designed for audio tools, sequencers, and creative applications.

Built with a focus on:

- Clean, modern aesthetics
- Audio-centric controls (VU meters, knobs, sequencer cells)
- Dynamic theming support
- Simple integration into existing Slint projects

## Components Included

### `RDSSelectButton`

A small selectable button with active state.

**[Properties]**

- `label: string`
- `active: bool`

**[Callbacks]**

- `clicked()`

---

### `RDSSequencerCell`

A compact grid cell suitable for step sequencers.

**[Properties]**

- `active: bool`
- `current: bool`

**[Callbacks]**

- `clicked()`

---

### `RDSVUMeter` / `RDSVertVUMeter`

Horizontal and vertical VU meters.

**[Properties]**

- `level: float` (0.0 – 1.0 recommended)
- `fill-color: color` (Defaults to `Theme.active.meter_normal`)

---

### `RDSCircleToggle`

A minimal circular toggle indicator.

**[Properties]**

- `active: bool`

**[Callbacks]**

- `clicked()`

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
- `renderer: string` ("hi-fi", "lo-fi")
- `indicator: string` ("circle", "line", "caret")
- `indicator-color: color`
- `min-value: float`
- `max-value: float`

**[Callbacks]**

- `value-changed(float)`

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

**[Callbacks]**

- `value-changed(float)`

---

### `RDSWaveformViz`

Visualizes a static waveform with an optional playhead.

**[Properties]**

- `waveform: [float]` (Amplitude values 0.0 – 1.0)
- `waveform_time_labels: [string]` (Time markers for X-axis)
- `playhead-index: int` (Current position in waveform array)

---

### `RDSOscilloscopeViz`

Visualizes a real-time signal as an oscilloscope trace.

**[Properties]**

- `oscilloscope: [float]` (Signal samples)

---

### `RDSSpectrumViz`

Visualizes frequency spectrum data as vertical bars.

**[Properties]**

- `spectrum: [float]` (Magnitude values per frequency bin)

---

### `RDSVectorscopeViz`

Visualizes phase relationship between two signals (L/R).

**[Properties]**

- `vectorscope_x: [float]` (Left channel signal samples)
- `vectorscope_y: [float]` (Right channel signal samples)

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

## Installation (Planned)

This library is intended to be distributed via:

- npm (for Slint + JS / WASM projects)
- Cargo (for Rust + Slint projects)

## Roadmap

- [x] npm package with .slint exports
- [x] Rust crate wrapping Slint resources
- [x] Theming support
- [ ] Additional UI components
- [ ] Documentation site & screenshots
- [ ] Demo application using the UI library

## License

Copyright © 2026
[Richard Bakos](mailto:info@resonancedesigns.dev) – [Resonance Designs](https://resonancedesigns.dev)
[MIT](LICENSE)
