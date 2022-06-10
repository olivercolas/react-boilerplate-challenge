import { useTranslation } from "react-i18next";

import Box from "../../components/atoms/Box";
import AppLink from "../../components/molecules/AppLink";

const Login = () => {
    const { t } = useTranslation()

    return (
        <Box space="2" align="center" direction="column">
            <Box space="2">{ t('login.title') }</Box>
            <Box>
                <AppLink to={t('nav.0.path')}>{ t('nav.0.text') }</AppLink>
            </Box>
        </Box>
    )
}

export default Login