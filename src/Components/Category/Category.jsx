import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res=>res.json());

const Category = () => {
    const categories = use(categoryPromise);
    const category = categories.data.news_category
    return (
        <div>
            <h1 className="font-bold">All Categories ({category.length})</h1>
            <div className="grid grid-cols-1 gap-3 mt-5">
                {
                    category.map(cat=>
                    <NavLink
                    to={`/category/${cat.category_id}`}
                        className='btn  bg-base-100'
                        key={cat.category_id}>{cat.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;