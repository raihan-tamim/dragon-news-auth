import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginWith = () => {
    return (
        <div>
            <h1 className='font-bold'>Login with</h1>
            <div className="flex flex-col gap-3 mt-5 ">
                <button className="btn btn-outline btn-primary w-full"><FcGoogle /> Login With Google</button>
                <button className="btn btn-outline btn-secondary w-full"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default LoginWith;