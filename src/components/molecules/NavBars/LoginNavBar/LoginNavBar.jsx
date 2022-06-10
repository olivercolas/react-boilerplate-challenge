import Box from "../../../atoms/Box";
import LanguageSelect from "../../LanguageSelect";
import Spacer from "../../../atoms/Spacer/Spacer";

const LoginNavBar = () => {
    return (
        <Box row space="2" gap="1">
            <Spacer />
            <LanguageSelect />
        </Box>
    )
}

export default LoginNavBar
