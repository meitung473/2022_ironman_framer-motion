import React, { useMemo } from "react";
import Days from "../Days";

export default function DailyTemplate({ day }) {
    const Animations = useMemo(() => Days[`Day${day}`], [day]);
    return <Animations />;
}
