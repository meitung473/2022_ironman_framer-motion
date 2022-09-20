import { useState, Suspense } from "react";
import DailyTemplate from "./utils/DailyTemplate";
import Days from "./Days";

function App() {
    const [day, setDay] = useState(Object.keys(Days).length + 1);
    return (
        <div>
            <label htmlFor="days">鐵人賽第 {day} 天</label>
            <select
                id="days"
                value={day}
                onChange={(e) => setDay(e.target.value)}
            >
                {Object.keys(Days).map((_, i) => {
                    return (
                        <option key={i} value={i + 2}>
                            Day {i + 2}
                        </option>
                    );
                })}
            </select>
            <Suspense fallback={"loading..."}>
                <DailyTemplate day={day} key={day} />
            </Suspense>
        </div>
    );
}

export default App;
