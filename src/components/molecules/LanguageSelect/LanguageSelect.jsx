import { useTranslation } from "react-i18next";

import Button from "../../atoms/Button";
import useAvailableLanguages from "../../../locales/useAvailableLanguages";

const LanguageSelect = () => {
    const { i18n } = useTranslation()
    const availableLangs = useAvailableLanguages()

    return availableLangs.map(lang =>
        <Button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
        >
            {lang}
        </Button>
    )
}

export default LanguageSelect
