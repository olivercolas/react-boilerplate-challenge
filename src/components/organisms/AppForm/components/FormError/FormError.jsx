import styled from 'styled-components'

import {ErrorMessage} from "formik";
import {fontSizeInStyledCSS} from "../../../../../utils/sizes/fonts";
import {spacingInPixels} from "../../../../../utils/sizes/spacing";

const StyledFormError = styled(ErrorMessage)`
  ${fontSizeInStyledCSS.paragraph};
  
  color: red;
  padding: ${spacingInPixels[2]} 0;
  text-align: center;
  
  &:first-letter {
    text-transform: capitalize;
  }
`

const FormError = ({name, children}) => {
    return (
        <StyledFormError name={name} component="p">{children}</StyledFormError>
    )
}

export default FormError