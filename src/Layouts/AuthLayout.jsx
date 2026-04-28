import { Outlet } from "react-router";
import Nav from "../Components/Header/Nav";



const AuthLayout = () => {
    return (
        <div className="w-11/12 mx-auto py-4 bg-base-200 min-h-screen">
           <header className="w-11/12 mx-auto ">
            <Nav></Nav>
           </header>
           <section className="w-11/12 mx-auto py-8 flex justify-center items-center">
            <Outlet></Outlet>
           </section>
        </div>
    );
};

export default AuthLayout;