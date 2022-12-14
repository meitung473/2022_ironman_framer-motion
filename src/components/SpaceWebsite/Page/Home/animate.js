import { adjustAphla } from "../../../../utils/themeMethod";
import { theme } from "../../style/theme";

const contentVariants = {
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
            duration: 0.5,
        },
    },
};

const articleVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
    exit: {
        filter: "blur(10px)",
        opacity: 0,
    },
};

const wrapperVariants = {
    hidden: {
        opacity: 0,
        x: "-100%",
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 1,
            delayChildren: 1.4,
        },
    },
    exit: {
        transition: {
            staggerChildren: 1,
            staggerDirection: -1,
        },
    },
};
const exploreVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.5,
        },
    },
    hover: {
        boxShadow: `0 0 0 40px ${adjustAphla(
            theme.colors.greyScale.black_0,
            0.1
        )}`,
    },
    exit: {
        backgroundColor: "#000",
        opacity: 0,
        transition: {
            duration: 1,
        },
    },
    tap: {
        scale: [1, 0.8, 1],
    },
};
export { contentVariants, articleVariants, wrapperVariants, exploreVariant };
