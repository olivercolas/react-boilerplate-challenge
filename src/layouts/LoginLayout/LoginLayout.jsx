import { Outlet } from "react-router-dom";

import LoginNavBar from "../../components/molecules/NavBars/LoginNavBar";

const LoginLayout = () => {
    return (
        <>
            <LoginNavBar />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LoginLayout
