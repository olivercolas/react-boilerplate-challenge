import {convertObjValuesToPixels, convertObjValuesToStyledCss} from "./convert";

export const spacing = {
    1: 12,
    2: 24,
    3: 36,
    4: 48,
}

export const spacingInPixels = convertObjValuesToPixels(spacing)

export const paddingInStyledCSS = convertObjValuesToStyledCss({obj: spacing, cssProperty: 'padding'})

export const marginInStyledCSS = convertObjValuesToStyledCss({obj: spacing, cssProperty: 'margin'})
