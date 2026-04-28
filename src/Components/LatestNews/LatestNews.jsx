import MarqueeImport from "react-fast-marquee"; 
const Marquee = MarqueeImport.default;

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-300 p-3 rounded-sm gap-5'>
            <p className='text-base-100 rounded-sm bg-red-600 px-3 py-2'>Latest</p>
            
            <Marquee className='grid gap-5' pauseOnHover='true' speed={50} gradient='true' gradientColor='yellow'>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, praesentium!</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, praesentium!</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, praesentium!</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;