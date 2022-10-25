import { useState, useEffect } from "react";
import DailyTemplate from "./template/DailyTemplate";
import Days from "./Days";
import {
    Routes,
    Route,
    useNavigate,
    useLocation,
    Navigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./Pages/Home/Home";
import styled, { ThemeProvider } from "styled-components";
import appTheme from "./theme";
import { ResetStyle } from "./utils/globalStyle";
import SpaceWebsite from "./components/SpaceWebsite/SpaceWebsite";

import EcommerceProduct from "./components/EcommerceProduct/EcommerceProduct";
import Blogr from "./components/Day17/Blogr";
import Entry from "./components/FinalProject/Entry";
import FaqAccordion from "./components/FaqAccordion/FaqAccordion";

const Container = styled(motion.div)`
    min-height: 100vh;
    background-image: conic-gradient(
        from 90deg at 50% 50%,
        #0071fc -64.49deg,
        rgba(70, 5, 255, 0.63) 54deg,
        rgba(97, 196, 251, 0.76) 146.25deg,
        rgba(194, 1, 242, 0.74) 223.13deg,
        #0071fc 295.51deg,
        rgba(70, 5, 255, 0.63) 414deg
    );
    background-position: center;
`;

function App() {
    // const [day, setDay] = useState(Object.keys(Days).length + 1);

    return (
        <ThemeProvider theme={appTheme}>
            <ResetStyle />
            <Container>
                <Routes>
                    {/* <Route path="*" element={<Navigate to="/" />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/Day16" element={<FaqAccordion />} />
                    <Route path="/Day17" element={<Blogr />} />
                    <Route path="/Day18" element={<EcommerceProduct />} />
                    <Route path="/Day19/*" element={<SpaceWebsite />} />
                    <Route path="/FinalProject/*" element={<Entry />} />
                </Routes>
            </Container>
            {/* <label htmlFor="days">鐵人賽第 {day} 天</label>
            <select
                id="days"
                value={day}
                onChange={(e) => {
                    setDay(e.target.value);
                }}
            >
                {Object.keys(Days).map((dayName, i) => {
                    return (
                        <option key={dayName} value={i + 2}>
                            Day {i + 2}
                        </option>
                    );
                })}
            </select> */}
            {/* <AnimatePresence initial={false} mode="wait"> */}
            {/* <Routes key={location.pathname} location={location}> */}
            {/* </AnimatePresence> */}
        </ThemeProvider>
    );
}

export default App;
