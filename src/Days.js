import { lazy } from "react";

const Days = {
    Day2: lazy(() => import("./components/Day2")),
    Day3: lazy(() => import("./components/Day3")),
};

export default Days;
