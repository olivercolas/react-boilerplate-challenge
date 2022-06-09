import { Link } from "react-router-dom";
import Typography from "../../atoms/Typography";

const AppLink = ({children, to}) => {
    return (
        <Link to={to} style={{flexShrink: 0}}>
            <Typography as="span">{children}</Typography>
        </Link>
    )
}

export default AppLink
