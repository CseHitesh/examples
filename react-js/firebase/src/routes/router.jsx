import ErrorPage from "./Error/Error";
import Home from "./Home";
import Login from "../components/forms/login";
import Register from "../components/forms/register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },



]);

export default router;
