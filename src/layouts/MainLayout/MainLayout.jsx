import { Outlet } from 'react-router-dom'
import DefaultNavbar from "../../components/molecules/NavBars/DefaultNavBar";

const MainLayout = () => {
    return (
        <>
            <DefaultNavbar />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout