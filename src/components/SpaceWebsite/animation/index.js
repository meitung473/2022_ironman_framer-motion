import { combineAnim } from "./combineAnim";

export const defaultScaleAnim = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
    },
    exit: {
        scale: 0,
    },
};
export const defaultOpacityAnim = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};
export const defaultArticleAnim = {
    show: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
    exit: {
        opacity: 0,
        y: 20,
    },
};

export const scaleAndOpacityAnim = combineAnim(
    defaultOpacityAnim,
    defaultScaleAnim
);

export const contentWrapperAnim = {
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};
