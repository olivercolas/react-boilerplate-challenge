import {css} from "styled-components";

const convertNumberToPixel = (number) => number + 'px'

const replaceEveryValueInObjectWith = ({obj, replaceFn}) => {
    const newObj = {}

    for (const key in obj) {
        const value = obj[key]
        newObj[key] = replaceFn(value)
    }

    return newObj
}

export const convertObjValuesToPixels = (obj) =>
    replaceEveryValueInObjectWith({
        obj: {...obj},
        replaceFn: convertNumberToPixel
    })

const convertNumberToStyledProperty = (cssProperty, value) => css`${cssProperty}: ${value}px;`

const convertNumberToStyledCSS = (cssProperty) => (value) => convertNumberToStyledProperty(cssProperty, value)

export const convertObjValuesToStyledCss = ({obj, cssProperty}) =>
    replaceEveryValueInObjectWith({
        obj: {...obj},
        replaceFn: convertNumberToStyledCSS(cssProperty)
    })