import styled, {css} from 'styled-components'
import isArray from "lodash/isArray";
import PropTypes from "prop-types";

import {spacing, spacingInPixels, paddingInStyledCSS} from "../../../utils/sizes/spacing";
import {flexAlignmentProps, getPaddingFromArrayOfSpaces} from "./utils";

const Box = styled.div`
  display: flex;
  flex-direction: ${props =>  props.direction};
  
  ${props => props.align && css`
    align-items: ${props.align};
  `}
  
  ${props => props.justify && css`
    justify-content: ${props.justify};
  `}
  
  ${props => {
      if(isArray(props.space)) {
          return css`
            padding: ${getPaddingFromArrayOfSpaces(props.space)};
          `
      } else {
          return paddingInStyledCSS[props.space]}
      }
  }
  

  ${props => props.gap && css`
    & > *:not(:last-child) {
      ${props.direction === 'row' ? 
          css`margin-right: ${spacingInPixels[props.gap]};`
          : 
          css`margin-bottom: ${spacingInPixels[props.gap]};
      `}
    }
  `}
`

Box.propTypes = {
    space: function(props, propName) {
        if(isArray(props.space)) {
            const isValidSpaceArray = props.space.length <= 4 && props.space.every((space => Number.isInteger(space)))

            if(!isValidSpaceArray) {
                return new Error(`If ${propName} is an array, it must be an array of up to 4 numbers`);
            }
        } else {
            const isValidSpaceValue = props.space.indexOf(Object.keys(props.space))

            if(!isValidSpaceValue) {
                return new Error(`If ${propName} is a string, it must be one of ${Object.keys(props.space).join(' ')}`);
            }
        }

        return null
    },
    gap: PropTypes.oneOf(Object.keys(spacing)),
    direction: PropTypes.oneOf(['row', 'column']),
    align: PropTypes.oneOf(flexAlignmentProps),
    justify: PropTypes.oneOf(flexAlignmentProps)
}

Box.defaultProps = {
    direction: 'row'
}

export default Box