import { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginWith = () => {
    const {googleLogin, githubLogin} = use(AuthContext);

    const handleLogin=()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user)
        }).catch(error=>{
            console.log(error)
        })
    }
    const handleLoginGit=()=>{
        githubLogin()
        .then(result=>{
            console.log(result.user)
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1 className='font-bold'>Login with</h1>
            <div className="flex flex-col gap-3 mt-5 ">
                <button onClick={handleLogin} className="btn btn-outline btn-primary w-full"><FcGoogle /> Login With Google</button>
                <button onClick={handleLoginGit} className="btn btn-outline btn-secondary w-full"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default LoginWith;