import { use } from "react";
import AddPosition from "./AddPosition";
import FindUs from "./FindUs";
import LoginWith from "./LoginWith";
import QZone from "./QZone";
import { AuthContext } from "../../Provider/AuthProvider";


const RightSide = () => {
    const {user} = use(AuthContext);
    return (
        <div className="space-y-8">
            {!user && <LoginWith></LoginWith>}
            <FindUs></FindUs>
            <QZone></QZone>
            <AddPosition></AddPosition>
        </div>
    );
};

export default RightSide;