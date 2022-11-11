import { SubHeading, Info, Line } from "../style";
import { lineAnim, wrapperAnim } from "../animate";
import { Outlet } from "react-router-dom";

function Destinations({ navigation }) {
    return (
        <></>
        // <Wrapper>
        //     <Outlet context="image" />
        //     <Box>
        //         {navigation}
        //         <Outlet context="main" />
        //         <Line variants={lineAnim} />
        //         <Info variants={wrapperAnim}>
        //             <SubHeading>AVG. DISTANCE</SubHeading>
        //             <SubHeading>Est. travel time</SubHeading>
        //             <Outlet context="subContent" />
        //         </Info>
        //     </Box>
        // </Wrapper>
    );
}
export default Destinations;
