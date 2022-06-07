import styled from 'styled-components'
import {fontSizeInStyledCSS} from "../../../utils/sizes/fonts";

const Typography = styled.p`
   ${(props => {
       switch (props.as) {
         case 'h1':
           return fontSizeInStyledCSS.heading
         case 'h2':
           return fontSizeInStyledCSS.subheading
         default:
           return fontSizeInStyledCSS.paragraph
       }
   })} 
`

export default Typography