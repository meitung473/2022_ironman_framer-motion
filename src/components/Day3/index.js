import HoverStartNEnd from "./HoverStartNEnd";
import WhileFocus from "./WhileFocus";
import WhileHover from "./WhileHover";
import WhileTap from "./WhileTap";
import Tab2Content from "./TabExample/Tab2Content";

const animations = [
    {
        name: "whileHover: touch my heart",
        component: WhileHover,
        containerHeight: "180px",
    },
    {
        name: "whileHover : onHoverStart & onHoverEnd",
        component: HoverStartNEnd,
        containerHeight: "450px",
    },
    {
        name: "whileFocus",
        component: WhileFocus,
        containerHeight: "250px",
    },
    {
        name: "whileTap",
        component: WhileTap,
        containerHeight: "250px",
    },
    {
        name: "Tab from W3school",
        component: Tab2Content,
        containerHeight: "400px",
    },
];

export default animations;
