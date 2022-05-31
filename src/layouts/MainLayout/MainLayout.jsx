import { Outlet } from 'react-router-dom'
import Navbar from "../../components/molecules/NavBar";

const MainLayout = () => {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout