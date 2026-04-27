
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold'>Find us on</h1>
            <div className="join join-vertical w-full my-5">
                <button className="btn bg-base-100 border-1 border-gray-200 justify-start join-item"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn bg-base-100 border-1 border-gray-200 justify-start join-item"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn bg-base-100 border-1 border-gray-200 justify-start join-item"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;