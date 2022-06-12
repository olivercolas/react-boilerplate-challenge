import { useTranslation } from "react-i18next";

import Box from "../../components/atoms/Box";
import AppLink from "../../components/molecules/AppLink";
import AppForm from "../../components/organisms/AppForm";
import { formFields, validationSchema } from "./constants";

const Login = () => {
    const { t } = useTranslation()

    const handleOnSubmitForm = (values, options) => {
        console.log({values})
        console.log({options})

        setTimeout(() => {
            options.setSubmitting(false)
        }, 300)
    }

    return (
        <Box space="4" align="center" direction="column">
            <Box space="4">{ t('login.title') }</Box>
            <Box space="4">
                <AppForm
                    direction="column"
                    fields={formFields}
                    validationSchema={validationSchema}
                    onSubmit={handleOnSubmitForm}
                    submitText={ t('form.login') }
                />
            </Box>
            <Box>
                <AppLink to={ t('nav.0.path') }>{ t('nav.0.text') }</AppLink>
            </Box>
        </Box>
    )
}

export default Login