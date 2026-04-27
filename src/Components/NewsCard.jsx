import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md rounded-lg">

            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">
                            {author?.name || "Unknown Author"}
                        </h2>
                        <p className="text-xs text-gray-500">
                            {author?.published_date?.split(" ")[0]}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Body */}
            <div className="p-4">
                <h2 className="font-bold text-lg mb-3">{title}</h2>

                <img
                    src={thumbnail_url}
                    alt=""
                    className="rounded-lg w-full h-52 object-cover mb-4"
                />

                <p className="text-sm text-gray-600">
                    {details.length > 200
                        ? details.slice(0, 200) + "..."
                        : details}
                </p>

                <button className="text-orange-500 font-semibold mt-2">
                    Read More
                </button>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 pb-4">

                {/* Rating */}
                <div className="flex items-center gap-2 text-orange-400">
                    <FaStar />
                    <span className="text-gray-700 font-medium">
                        {rating?.number || 0}
                    </span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;