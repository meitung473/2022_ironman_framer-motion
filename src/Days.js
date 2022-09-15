import { lazy } from "react";

const Days = {
    Day2: lazy(() => import("./components/Day2")),
};

export default Days;
