import { useTranslation } from "react-i18next";

import AppLink from "../../AppLink";
import Box from "../../../atoms/Box";
import Spacer from "../../../atoms/Spacer/Spacer";
import LanguageSelect from "../../LanguageSelect";

const DefaultNavbar = () => {
    const { t } = useTranslation()
    const navList = t('nav')

    return (
        <nav>
            <Box direction="row" space="4" gap="3">
                {navList.map(({path, text}) => (
                    <AppLink key={text} to={path}>{text}</AppLink>
                ))}

                <Spacer />

                <LanguageSelect />
            </Box>
        </nav>
    )
}

export default DefaultNavbar
