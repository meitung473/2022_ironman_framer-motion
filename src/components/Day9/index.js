import AnimatePresenceComponent from "./AnimatePresenceComponent";
import Carousel from "./Carousel/Carousel";
import ComponentFadeOut from "./ComponentFadeOut";

const animations = [
    {
        name: "Bang 不見",
        component: [ComponentFadeOut, AnimatePresenceComponent],
        containerHeight: "300px",
    },
    {
        name: "旋轉木馬/燈箱",
        component: Carousel,
        // containerHeight: "300px",
    },
];

export default animations;
