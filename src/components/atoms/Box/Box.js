import styled, {css} from 'styled-components'
import {spacing, spacingInPixels, paddingInStyledCSS} from "../../../utils/sizes/spacing";
import PropTypes from "prop-types";

const Box = styled.div`
  display: flex;
  flex-direction: ${props =>  props.direction};
  
  ${props => paddingInStyledCSS[props.space]}

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
    space: PropTypes.oneOf(Object.keys(spacing)),
    gap: PropTypes.oneOf(Object.keys(spacing)),
    direction: PropTypes.oneOf(['row', 'column'])
}

Box.defaultProps = {
    direction: 'row'
}

export default Box