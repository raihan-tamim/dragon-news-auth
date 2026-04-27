
import logo from '../../assets/logo.png'
import { format } from './../../../node_modules/date-fns/format';

const Header = () => {
    return (
        <div className='flex flex-col  justify-center items-center p-5 gap-5'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>{format(new Date(), "EEEE, LLLL d, y")}</p>
        </div>
    );
};

export default Header;