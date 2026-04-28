
import { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [nameError, setNameError] = useState('')
    const {createUser, setUser, updateUser} = use(AuthContext);
    const navigate = useNavigate()
    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        if(name.length<5){
            setNameError('Name should be more than 5 characters')
            return
        }else{setNameError('')}
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            updateUser({displayName:name, photoURL: photo})
            .then(()=>{
                setUser({...user, displayName:name, photoURL: photo});
                navigate('/')
            }).catch(error=>{
                console.log(error);
                setUser(user)
            })
            
        }).catch(error=>
            alert(error.message)
        )
    }
    return (
        <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold pt-8 text-center">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
                {/* Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    {nameError&& <p className='text-red-600 text-sm'>{nameError}</p>}
                </div>
                {/* Photo URL */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                {/* email */}
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
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="font-bold text-center pb-5">Already Have An Account ? <Link to='/auth/login' className="text-secondary">Login</Link></p>
        </div>
    );
};

export default Register;