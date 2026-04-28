import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const {emailLogin} = use(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location);
    const [error, setError] = useState('');
        
    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('')
        emailLogin(email, password)
        .then((result)=>{
            // console.log(result.user)
            // alert('Sign in successful')
            navigate(`${location.state? location.state : '/'}`)
            
        }).catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold pt-8 text-center">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                {error && <p className="text-sm text-red">{error}</p>}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="font-bold text-center pb-5">Dont’t Have An Account ? <Link to='/auth/register' className="text-secondary">Register</Link></p>
        </div>
    );
};

export default Login;