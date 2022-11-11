import React from "react";

import { MotionBox, MotionWrapper } from "../shared/components";

// layout
const Crew = React.forwardRef(({ navigation, children }, ref) => {
    console.log(ref);
    return (
        <MotionWrapper ref={ref.current[0]}>
            {children}
            <MotionBox ref={ref.current[1]}>{navigation}</MotionBox>
        </MotionWrapper>
    );
});
export default Crew;
