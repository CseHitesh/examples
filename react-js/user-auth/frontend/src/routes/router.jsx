import ErrorPage from "./Error/Error";
import Home from "./Home";
import Login from "../components/forms/login";
import ProtectedRoute from "./protectedRoutes/ProtectedRoute.jsx";
import Register from "../components/forms/register";
import Todo from "./Todo/index.jsx";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <DefaultLayout>
                    <Home />
                </DefaultLayout>
            </ProtectedRoute>
        ),
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
    {
        path: "/todo",
        element: (
            <ProtectedRoute>
                <Todo />
            </ProtectedRoute>
        ),
    }



]);

export default router;
