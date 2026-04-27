import { Suspense } from "react";
import Category from "../Category/Category";


const LeftSide = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
                <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftSide;