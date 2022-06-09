import AppLink from "../AppLink";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import Spacer from "../../atoms/Spacer/Spacer";
import useAvailableLanguages from "../../../locales/useAvailableLanguages";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const { i18n, t } = useTranslation()
    const availableLangs = useAvailableLanguages()
    const navList = t('nav')

    console.log({navList})

    return (
        <header>
            <Box row space="2" gap="1">
                {navList.map(({path, text}) => (
                    <AppLink key={text} to={path}>{text}</AppLink>
                ))}

                <Spacer />

                {availableLangs.map(lang => (
                    <Button key={lang} onClick={() => i18n.changeLanguage(lang)}>{lang}</Button>
                ))}
            </Box>
        </header>
    )
}

export default Navbar
