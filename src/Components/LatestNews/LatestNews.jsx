import { useEffect, useState } from "react";
import MarqueeImport from "react-fast-marquee"; 
import { useLoaderData } from "react-router";
const Marquee = MarqueeImport.default;

const LatestNews = () => {
    const data = useLoaderData()
    const [breakingNews, setBreakingNews] = useState([])
    // console.log(data);
    
    useEffect(()=>{
        const filteredData = data.filter(d=>d.others_info.is_todays_pick);
        console.log(filteredData)
        setBreakingNews(filteredData)
    },[data])
    return (
        <div className='flex items-center bg-base-300 p-3 rounded-sm gap-5'>
            <p className='text-base-100 rounded-sm bg-red-600 px-3 py-2'>Latest</p>
            
            <Marquee  pauseOnHover='true' speed={50} gradient='true' gradientColor='yellow'>
                {breakingNews.map(news=> <p className='mr-5 text-bold'>{news.title}</p> )}
            </Marquee>

        </div>
    );
};

export default LatestNews;