# Resonance Designs – Slint UI Component Kit

![Static Badge](https://img.shields.io/badge/Version-0.1.9-orange)

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

**[Example]**

```slint
RDSSelectButton {
    label: "Mute";
    active: is-muted;
    clicked => { is-muted = !is-muted; }
}
```

---

### `RDSSequencerCell`

A compact grid cell suitable for step sequencers.

**[Properties]**

- `active: bool`
- `current: bool`

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

**[Example]**

```slint
RDSVUMeter {
    level: left-channel-db;
}
```

---

### `RDSCircleToggle`

A minimal circular toggle indicator.

**[Properties]**

- `active: bool`

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
- `icon-color: color` (Default: `Theme.active.text_primary`)
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
- `renderer: string` ("hi-fi", "lo-fi")
- `indicator: string` ("circle", "line", "caret")
- `indicator-color: color`
- `min-value: float`
- `max-value: float`

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

### `RDSHeaderLabel`

A styled header label with background and padding.

**[Properties]**

- `text: string`
- `horizontal-alignment: enum` (Default: `center`)
- `vertical-alignment: enum` (Default: `center`)
- `padding-horizontal: length` (Default: `8px`)
- `padding-vertical: length` (Default: `4px`)

**[Example]**

```slint
RDSHeaderLabel {
    text: "OSCILLATOR 1";
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
- `pad-digits: int` (Default: `3`)
- `button-tog: bool` (Default: `true`)
- `button-pos: string` ("top-bottom", "left-right")

**[Callbacks]**

- `value-changed(float)`

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

### `RDSWaveformViz`

Visualizes a static waveform with an optional playhead.

**[Properties]**

- `waveform: [float]` (Amplitude values 0.0 – 1.0)
- `waveform_time_labels: [string]` (Time markers for X-axis)
- `playhead-index: int` (Current position in waveform array)

**[Example]**

```slint
RDSWaveformViz {
    waveform: [0.1, 0.5, 0.8, 0.4, 0.2];
    waveform_time_labels: ["0s", "1s", "2s", "3s", "4s"];
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

- `vectorscope_x: [float]` (Left channel signal samples)
- `vectorscope_y: [float]` (Right channel signal samples)

**[Example]**

```slint
RDSVectorscopeViz {
    vectorscope_x: [0.1, 0.2, -0.1];
    vectorscope_y: [0.2, -0.1, 0.3];
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
