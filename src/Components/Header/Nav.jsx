import { Link, NavLink } from 'react-router';
import profile from '../../assets/user.png'
import { use } from 'react';
import { AuthContext } from './../../Provider/AuthProvider';


const Nav = () => {
    const {user, logout} = use(AuthContext)

    const handleLogout = ()=>{
        logout()
        .then(()=>{
            alert('Logged out successful')
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between items-center my-3'>
            <div className="">{user && user.email}</div>
            <div className="flex justify-between gap-5">
                <NavLink to='/'>Home </NavLink>
                <NavLink to='/about'>About </NavLink>
                <NavLink to='/career'>Career </NavLink>
            </div>
            <div className="flex items-center gap-3">
                <img className='h-12 w-12 rounded-full object-cover' src={`${user? user?.photoURL : profile }`} alt="" />
                {user? 
                <button onClick={handleLogout} className="btn bg-gray-700 text-white font-bold px-10 py-2">Logout</button> :
                <Link to='/auth/login' className="btn bg-gray-700 text-white font-bold px-10 py-2">Login</Link>
            }
                
            </div>
        </div>
    );
};

export default Nav;