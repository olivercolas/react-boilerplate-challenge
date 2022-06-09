import {
    Routes,
    Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./screens/home";
import Login from "./screens/login";
import NotFound from "./screens/not-found";
import About from "./screens/about";

const AppRoutes = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)

export default AppRoutes