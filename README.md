# Resonance Designs – Slint UI Component Kit

![0.1.0](https://img.shields.io)

A reusable collection of Slint UI components designed for audio tools, sequencers, and creative applications.

Built with a focus on:

- Clean, modern dark UI aesthetics
- Audio-centric controls (VU meters, knobs, sequencer cells)
- Simple integration into existing Slint projects

## Components Included

`RDSSelectButton`

A small selectable button with active state.

**[Properties]**

- `label: string`
- `active: bool`

**[Callbacks]**

- `clicked()`

---

`RDSSequencerCell`

A compact grid cell suitable for step sequencers.

**[Properties]**

- `active: bool`
- `current: bool`

**[Callbacks]**

- `clicked()`

---

`RDSVUMeter`

A horizontal VU meter.

**[Properties]**

- `level: float` (0.0 – 1.0 recommended)
- `fill-color: color`

---

`RDSVertVUMeter`

A vertical VU meter.

**[Properties]**

- `level: float` (0.0 – 1.0 recommended)
- `fill-color: color`

---

`RDSCircleToggle`

A minimal circular toggle indicator.

**[Properties]**

- `active: bool`

**[Callbacks]**

- `clicked()`

---

`RDSKnob`

A rotary knob supporting bounded and infinite rotation modes.

**[Properties]**

- `value: float`
- `rotation-angle: angle`
- `size: length`
- `indicator-position: length`
- `sensitivity: float`
- `scroll-sensitivity: float`
- `min-value: float`
- `max-value: float`

**[Callbacks]**

- `value-changed(float)`

**[Modes]**

- **Bounded mode:** `min-value != max-value`
- **Infinite mode:** `min-value == max-value`

## Example Usage

``` slint
import { RDSKnob, RDSVUMeter } from "rds-ui/components.slint";

RDSKnob {
    size: 60px;
    min-value: 0;
    max-value: 127;
    sensitivity: 0.8;

    value-changed(v) => {
        console.log("Knob value:", v);
    }
}

RDSVUMeter {
    level: 0.65;
    fill-color: #c53bff;
}
```

## Installation (Planned)

This library is intended to be distributed via:

- npm (for Slint + JS / WASM projects)
- Cargo (for Rust + Slint projects)

See roadmap below.

## Roadmap

- [ ] npm package with .slint exports
- [ ] Rust crate wrapping Slint resources
- [ ] Theming support
- [ ] Additional audio UI components
- [ ] Documentation site & screenshots

## License

Copyright © 2026
[Richard Bakos](mailto:info@resonancedesigns.dev) – [Resonance Designs](https://resonancedesigns.dev)
[MIT](LICENSE.txt)
