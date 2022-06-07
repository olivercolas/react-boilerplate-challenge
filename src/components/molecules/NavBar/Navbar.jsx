import AppLink from "../AppLink";
import { navlist } from "./constants";
import Box from "../../atoms/Box";

const Navbar = () => {
    return (
        <header>
            <Box row space="2" gap="1">
                {navlist.map(({path, text}) => (
                    <AppLink key={text} to={path}>{text}</AppLink>
                ))}
            </Box>
        </header>
    )
}

export default Navbar
