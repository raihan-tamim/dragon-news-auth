import AddPosition from "./AddPosition";
import FindUs from "./FindUs";
import LoginWith from "./LoginWith";
import QZone from "./QZone";


const RightSide = () => {
    return (
        <div className="space-y-8">
            <LoginWith></LoginWith>
            <FindUs></FindUs>
            <QZone></QZone>
            <AddPosition></AddPosition>
        </div>
    );
};

export default RightSide;