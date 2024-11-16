import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    },
    {
        path: "/news",
        element: <div>Hello news</div>,
    },
    {
        path: "auth",
        element: <div>Log in Auth</div>,
    },
    {
        path: "*",
        element: <div>Error</div>,
    },
])

export default router;