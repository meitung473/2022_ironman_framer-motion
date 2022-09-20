import CustomVariants from "./CustomVariants";
import MultipleVariants from "./MultipleVariants";
import NameFloating from "./NameFloating";
import VariantsSpread from "./VariantsSpread";

const animations = [
    {
        name: "Variant 的 custom",
        component: CustomVariants,
    },
    {
        name: "Variants Array string",
        component: MultipleVariants,
        containerHeight: "300px",
    },
    {
        name: "Variants 傳播",
        component: VariantsSpread,
    },
    {
        name: "浮動文字",
        component: NameFloating,
    },
];

export default animations;
