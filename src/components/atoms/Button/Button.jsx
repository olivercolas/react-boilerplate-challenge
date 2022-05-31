import PropTypes from 'prop-types'
import { StyledButton } from "./Button.styles";

const Button = ({type = 'button', children}) => {
    return (
        <StyledButton type={type}>{children}</StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.string
}

export default Button