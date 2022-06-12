import {convertObjValuesToPixels, convertObjValuesToStyledCss} from "./convert";

export const spacing = {
    1: 4,
    2: 8,
    3: 12,
    4: 24,
    5: 36,
    6: 48,
}

export const spacingInPixels = convertObjValuesToPixels(spacing)

export const paddingInStyledCSS = convertObjValuesToStyledCss({obj: spacing, cssProperty: 'padding'})

export const marginInStyledCSS = convertObjValuesToStyledCss({obj: spacing, cssProperty: 'margin'})
