import { Link } from "react-router";



const NewsDetailCard = ({news}) => {
    const {image_url, title, details,category_id} = news;
    return (
        <div className="space-y-5">
            <img className="w-full object-cover h-82 " src={image_url} alt="" />
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{details}</p>

            <div>
                <Link className="bg-red-500 text-white px-4 py-2 rounded-lg" to={`/category/${category_id}` }>All news in this category</Link>
            </div>
        </div>
    );
};

export default NewsDetailCard;