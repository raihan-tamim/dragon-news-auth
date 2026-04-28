import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategorieNews from "../Pages/CategorieNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailsNews from "../Pages/DetailsNews";
import PrivateRoute from "../Provider/PrivateRoute";
import Loader from "../Pages/Loader";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index:true,
                element: <Home></Home>
            },
            {
                path:'/category/:id',
                element:<CategorieNews></CategorieNews>,
                loader: ()=> fetch('/allnews.json'),
                hydrateFallbackElement: <Loader></Loader>
            }
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path: '/auth/login',
                element:<Login></Login>
            },
            {
                path: '/auth/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path: '/news-details/:id',
        element:<PrivateRoute>
            <DetailsNews></DetailsNews>
        </PrivateRoute>,
        loader: ()=> fetch('/allnews.json'),
        hydrateFallbackElement: <Loader></Loader>
    }
])

