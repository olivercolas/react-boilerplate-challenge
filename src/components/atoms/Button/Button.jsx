import PropTypes from 'prop-types'
import { StyledButton } from "./Button.styles";
import Typography from "../Typography";

const Button = ({type = 'button', children, ...buttonProps}) => {
    return (
        <StyledButton type={type} {...buttonProps}>
            <Typography as="span">{children}</Typography>
        </StyledButton>
    )
}

Button.propTypes = {
    type: PropTypes.string
}

export default Button