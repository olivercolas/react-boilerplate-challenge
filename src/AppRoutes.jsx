import {
    Routes,
    Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./screens/home";
import Login from "./screens/login";
import NotFound from "./screens/not-found";

const AppRoutes = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default AppRoutes