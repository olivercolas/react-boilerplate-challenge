import { useTranslation } from "react-i18next";

import Box from "../../components/atoms/Box";

const About = () => {
    const { t } = useTranslation()

    return (
        <Box row space={[0, 2, 2, 2]}>
            <div>{ t('about.title') }</div>
        </Box>
    )
}

export default About
