import {useTranslation} from "react-i18next";

const useAvailableLanguages = () => {
    const {i18n} = useTranslation()

    return Object.keys(i18n.store.data)
}

export default useAvailableLanguages