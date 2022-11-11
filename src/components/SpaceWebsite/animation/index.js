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

export const scaleAndOpacityAnim = combineAnim(
    defaultOpacityAnim,
    defaultScaleAnim
);
