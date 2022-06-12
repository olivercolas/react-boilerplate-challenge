import styled from 'styled-components'
import {Field} from "formik";
import {spacingInPixels} from "../../../../../utils/sizes/spacing";

export const StyledField = styled(Field)`
    padding: ${spacingInPixels[1]} ${spacingInPixels[2]}
`

const FormField = ({type, name}) => {
    return (
        <StyledField type={type} name={name} />
    )
}

export default FormField
