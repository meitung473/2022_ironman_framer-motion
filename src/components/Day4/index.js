import Pan from "./Pan";
import WhileDrag from "./WhileDrag";
import WhileInView from "./WhileInView";

const animations = [
    {
        name: "Pan",
        component: Pan,
        containerHeight: "200px",
    },
    {
        name: "whileDrag : 各種拖曳",
        component: WhileDrag,
        containerHeight: "600px",
    },
    {
        name: "whileInView : 應用 #02 篇的 PPT 陽春動畫",
        component: WhileInView,
        containerHeight: "450px",
    },
];

export default animations;
