import {convertObjValuesToPixels, convertObjValuesToStyledCss} from "./convert";

export const fontSize = {
    heading: 48,
    subheading: 24,
    paragraph: 16,
}

export const fontSizeInPixels = convertObjValuesToPixels(fontSize)

export const fontSizeInStyledCSS = convertObjValuesToStyledCss({obj: fontSize, cssProperty: 'font-size'})