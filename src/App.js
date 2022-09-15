import { useState } from "react";
import DailyTemplate from "./components/DailyTemplate";
import Days from "./Days";

function App() {
    const [day, setDay] = useState(2);
    return (
        <div className="App">
            <label htmlFor="days">鐵人賽第 {day} 天</label>
            <select
                id="days"
                value={day}
                onChange={(e) => {
                    setDay(e.target.value);
                }}
            >
                {Array.from({ length: Object.keys(Days).length }, (_, i) => {
                    return (
                        <option key={i} value={i + 2}>
                            Day {i + 2}
                        </option>
                    );
                })}
            </select>
            <DailyTemplate day={day} />
        </div>
    );
}

export default App;
