import { Outlet } from "react-router-dom";
import { MotionBox, MotionWrapper } from "../../components/Carousel";

const Crew = ({ navigation }) => {
    return (
        <MotionWrapper>
            <Outlet context="image" />
            <MotionBox>
                {navigation}
                <Outlet context="main" />
            </MotionBox>
        </MotionWrapper>
    );
};

export default Crew;
