import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Header from '../Components/Header/Header';
import RightSide from '../Components/Homelayout/RightSide';
import NewsDetailCard from '../Components/NewsDetailCard';

const DetailsNews = () => {
    const { id } = useParams();
    const allData = useLoaderData();
    
    const [news, setNews] = useState({});

    useEffect(() => {
        const detailNews = allData.find(data => data._id == id)
        // console.log(detailNews)
        setNews(detailNews);
    }, [id, allData])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid  grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h1 className='text-xl font-bold'>Dragon News</h1>
                    <NewsDetailCard news={news}></NewsDetailCard>
                </section>
                <section className='col-span-3'>
                    <RightSide></RightSide>
                </section>
            </main>
        </div>
    );
};

export default DetailsNews;