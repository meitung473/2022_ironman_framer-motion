import { useState, useEffect } from "react";
import DailyTemplate from "./template/DailyTemplate";
import Days from "./Days";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
    const [day, setDay] = useState(Object.keys(Days).length + 1);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        navigate(`/Day${day}`);
    }, [day, navigate]);
    return (
        <div>
            <label htmlFor="days">鐵人賽第 {day} 天</label>
            <select
                id="days"
                value={day}
                onChange={(e) => {
                    setDay(e.target.value);
                }}
            >
                {Object.keys(Days).map((_, i) => {
                    return (
                        <option key={i} value={i + 2}>
                            Day {i + 2}
                        </option>
                    );
                })}
            </select>
            <AnimatePresence initial={false} mode="wait" exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path="Day:day" element={<DailyTemplate />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
