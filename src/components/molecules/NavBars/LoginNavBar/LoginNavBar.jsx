import Box from "../../../atoms/Box";
import LanguageSelect from "../../LanguageSelect";
import Spacer from "../../../atoms/Spacer/Spacer";

const LoginNavBar = () => {
    return (
        <Box row space="4" gap="3">
            <Spacer />
            <LanguageSelect />
        </Box>
    )
}

export default LoginNavBar
