import styled, {css} from 'styled-components'
import isArray from "lodash/isArray";
import PropTypes from "prop-types";

import {spacing, spacingInPixels, paddingInStyledCSS} from "../../../utils/sizes/spacing";
import {getPaddingFromArrayOfSpaces} from "./utils";
import {directionChoices, flexAlignmentChoices} from "../../../utils/props";

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
      if(!props.space) return;
      
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
        if(!props.space) return null

        if(isArray(props.space)) {
            const isValidSpaceArray = props.space.length <= 4 && props.space.every((space => Number.isInteger(space)))

            if(!isValidSpaceArray) {
                return new Error(`If ${propName} is an array, it must be an array of up to 4 numbers`);
            }
        } else {
            const isValidSpaceValue = Object.keys(spacing).includes(props.space)

            if(!isValidSpaceValue) {
                return new Error(`If ${propName} is a string, it must be one of ${Object.keys(spacing).join(' ')}`);
            }
        }
    },
    gap: PropTypes.oneOf(Object.keys(spacing)),
    direction: PropTypes.oneOf(directionChoices),
    align: PropTypes.oneOf(flexAlignmentChoices),
    justify: PropTypes.oneOf(flexAlignmentChoices)
}

Box.defaultProps = {
    direction: 'row',
}

export default Box