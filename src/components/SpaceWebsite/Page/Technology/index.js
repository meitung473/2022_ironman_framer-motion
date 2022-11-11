import { SubTitle } from "./style";
import React from "react";
import MotionBox from "../shared/components/MotionBox";
import { MotionWrapper } from "../shared/components";
import { Outlet } from "react-router-dom";

const Technology = React.forwardRef(({ navigation, children }, ref) => {
    return (
        <MotionWrapper ref={ref.current[0]}>
            {navigation}

            {children}
            <MotionBox ref={ref.current[1]}>
                <SubTitle>THE TERMINOLOGY…</SubTitle>
                <Outlet />
                {/* <Outlet context="main" /> */}
            </MotionBox>
            {/* <Outlet context="image" /> */}
        </MotionWrapper>
    );
});
export default Technology;
