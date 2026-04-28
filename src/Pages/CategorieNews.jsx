import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";



const CategorieNews = () => {
    const data = useLoaderData()
    const {id} = useParams();
    const [categoryNews, setCategoryNews] = useState([])

    // console.log(data)
    useEffect(()=>{
        if(id == 8){
            setCategoryNews(data);
        }else if(id == 1){
            const filterBreakingNews = data.filter(news=>news.others_info.is_todays_pick)
            setCategoryNews(filterBreakingNews);
        }else{
            const filteredData = data.filter(news=>news.category_id == id);
            setCategoryNews(filteredData)
        }
    },[ data, id])
    return (
        <div>
            <h1 className="font-bold text-gray-600">Dragon news home</h1> 
            <div className="flex flex-col gap-5 mt-5">
                {
                    categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategorieNews;