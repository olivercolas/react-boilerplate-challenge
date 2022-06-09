import Logo from "../../components/atoms/Logo";
import { HomeWrapper } from "./Home.styles";
import {useTranslation} from "react-i18next";

const Home = () => {
    const { t } = useTranslation()

    return (
        <HomeWrapper>
            <Logo />
            <p>{ t('home.title') }</p>
        </HomeWrapper>
    )
}

export default Home