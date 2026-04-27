import swimming from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import ground from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className="bg-base-300 p-3">
            <h1 className='font-bold'>Q-Zone</h1>
            <div className='p-5 space-y-5'>
                <img  src={swimming} alt="" className='w-full' />
                <img  src={classImg} alt="" className='w-full' />
                <img  src={ground} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default QZone;