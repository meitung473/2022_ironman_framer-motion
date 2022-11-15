import { SubTitle } from "./style";
import { Outlet } from "react-router-dom";
import { MotionBox, MotionWrapper } from "../../components/Carousel";

function Technology({ navigation }) {
    return (
        <MotionWrapper>
            {navigation}
            <MotionBox>
                <SubTitle layoutId="title">THE TERMINOLOGY…</SubTitle>
                <Outlet context="main" />
            </MotionBox>
            <Outlet context="image" />
        </MotionWrapper>
    );
}
export default Technology;
