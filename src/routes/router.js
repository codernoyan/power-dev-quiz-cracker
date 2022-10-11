import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import QuizDetails from "../components/QuizDetails/QuizDetails";
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
            },
            {
                path: '/quiz/:quizId',
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <QuizDetails></QuizDetails>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])