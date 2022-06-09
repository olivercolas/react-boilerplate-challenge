import PropTypes from 'prop-types'
import { StyledButton } from "./Button.styles";

const Button = ({type = 'button', children, ...rest}) => {
    return (
        <StyledButton type={type} {...rest}>{children}</StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.string
}

export default Button