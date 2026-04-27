import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategorieNews from "../Pages/CategorieNews";

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
                loader: ()=> fetch('/allnews.json')
            }
        ]
    }
])

