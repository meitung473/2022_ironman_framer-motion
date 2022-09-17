import FramerMotionAnimation from "./FramerMotionAnimation";
import NormalAnimation from "./NormalAnimation";
import PPTAnimation from "./PPTAnimation";
import SquareAnimation from "./SquareAnimation";
import InitialFalse from "./InitialFalse";
import TransitionTypes from "./TransitionTypes";
const animations = [
    {
        name: "CSS v.s motion",
        component: [NormalAnimation, FramerMotionAnimation],
    },
    {
        name: "keyframes square",
        component: SquareAnimation,
        containerHeight: "300px",
    },
    {
        name: "PPT 陽春動畫",
        component: PPTAnimation,
        containerHeight: "250px",
    },
    {
        name: "initial false",
        component: InitialFalse,
    },
    {
        name: "transition types",
        component: TransitionTypes,
        containerHeight: "300px",
    },
];

export default animations;
