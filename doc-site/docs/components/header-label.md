# RDSHeaderLabel

A styled header label with background and padding.

## Properties

- **text**: `string`
- **horizontal-alignment**: `enum` (Default: `center`)
- **vertical-alignment**: `enum` (Default: `center`)
- **padding-horizontal**: `length` (Default: `8px`)
- **padding-vertical**: `length` (Default: `4px`)
- **right-padding**: `length` (Default: `8px`) - Padding for the right-side slot
- **right-gap**: `length` (Default: `6px`) - Spacing between items in the right-side slot

## Children

`RDSHeaderLabel` supports child elements which are automatically placed in a horizontal layout on the right side of the header. This is useful for adding status indicators or small buttons.

## Example

```slint
import { RDSHeaderLabel, RDSCircleToggle } from "rds-slint-ui-kit/components/index.slint";

RDSHeaderLabel {
    text: "OSCILLATOR 1";
    RDSCircleToggle {
        active: true;
    }
}
```
