import Pan from "./Pan";
import WhileDrag from "./WhileDrag";
import WhileInView from "./WhileInView";

const animations = [
    {
        name: "Pan",
        component: Pan,
    },
    {
        name: "whileDrag : 各種拖曳",
        component: WhileDrag,
        containerHeight: "600px",
    },
    {
        name: "whileInView",
        component: WhileInView,
        containerHeight: "450px",
    },
];

export default animations;
