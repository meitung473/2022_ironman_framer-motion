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
        name: "Variants 傳播",
        component: VariantsSpread,
    },
    {
        name: "浮動文字",
        component: NameFloating,
    },
    {
        name: "多個 variants",
        component: MultipleVariants,
        containerHeight: "300px",
    },
];

export default animations;
