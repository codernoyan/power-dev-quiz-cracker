import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Root from "../layouts/Root";
import { quizDataLoader } from "../loaders/quizDataLoader";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: quizDataLoader,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            }
        ]
    }
])