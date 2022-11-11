import { SubHeading, Info, Line } from "./style";
import { lineAnim, wrapperAnim } from "./animate";
import React from "react";
import { MotionBox, MotionWrapper } from "../shared/components";

// this layout not moved when child route changes
const Destinations = React.forwardRef(({ navigation, children }, ref) => {
    return (
        <MotionWrapper ref={ref.current[0]}>
            {/* image should be here */}
            {children}
            <MotionBox ref={ref.current[1]}>
                {navigation}
                {/* content should be here */}
                <Line variants={lineAnim} />
                <Info variants={wrapperAnim} ref={ref.current[2]}>
                    <SubHeading>AVG. DISTANCE</SubHeading>
                    <SubHeading>Est. travel time</SubHeading>
                    {/* subContent should be here */}
                </Info>
            </MotionBox>
        </MotionWrapper>
    );
});
export default Destinations;
