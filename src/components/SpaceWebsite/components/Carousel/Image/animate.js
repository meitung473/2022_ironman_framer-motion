import { adjustAphla } from "../../../../../utils/themeMethod";
import { theme } from "../../../style/theme";

export const loadingVariants = {
    loading: (flashing) => ({
        backgroundColor: theme.colors.primary.Default,
        opacity: flashing ? 0.5 : 1,
        transition: {
            type: "tween",
            ease: [0.4, 0, 0.6, 1],
            duration: 1.4,
            repeat: flashing ? Infinity : 0,
        },
    }),
    static: {
        opacity: 1,
        backgroundColor: adjustAphla(theme.colors.primary.Dark, 0),
        transition: {
            type: "tween",
            ease: [0.4, 0, 0.6, 1],
            duration: 1,
        },
    },
};
export const imageVariants = {
    hidden: {
        opacity: 0,
    },
    show: (loadingImage) => ({
        opacity: loadingImage ? 0 : 1,
        transition: {
            delay: loadingImage ? 1 : 0,
            duration: 0.5,
        },
    }),
    exit: {
        opacity: 0,
    },
};
