
import { NavLink } from 'react-router';
import profile from '../../assets/user.png'

const Nav = () => {
    return (
        <div className='flex justify-between items-center my-3'>
            <div className=""></div>
            <div className="flex justify-between gap-5">
                <NavLink to='/'>Home </NavLink>
                <NavLink to='/about'>About </NavLink>
                <NavLink to='/career'>Career </NavLink>
            </div>
            <div className="flex items-center gap-3">
                <img className='h-10' src={profile} alt="" />
                <button className="btn bg-gray-700 text-white font-bold px-10 py-2">Login</button>
            </div>
        </div>
    );
};

export default Nav;