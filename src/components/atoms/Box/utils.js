import {spacingInPixels} from "../../../utils/sizes/spacing";

export const getPaddingFromArrayOfSpaces = (spaces) => {
    return [...spaces].map((space, index) => {
        let padding = spacingInPixels[space] || '0px'
        const isNotEndOfArray = index !== spaces.length - 1

        if(isNotEndOfArray){
            padding += ' '
        }

        return padding
    })
}