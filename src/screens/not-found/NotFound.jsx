import {useTranslation} from "react-i18next";

const NotFound = () => {
    const { t } = useTranslation()

    return <div>{ t('notFound.title') }</div>
}

export default NotFound