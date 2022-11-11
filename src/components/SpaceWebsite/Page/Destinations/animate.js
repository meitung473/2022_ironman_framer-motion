import { combineAnim } from "../../animation/combineAnim";
export const wrapperAnim = {
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const imageAnim = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "tween",
            ease: "easeIn",
        },
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: {
            type: "tween",
            ease: "easeOut",
        },
    },
};

export const articleAnim = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        x: 50,
    },
};
export const lineAnim = {
    hidden: {
        scaleX: 0,
    },
    show: {
        scaleX: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        scaleX: 0,
    },
};
// subContent
export const subContentAnim = combineAnim(
    {},
    {
        hidden: { x: 10, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
        },
        exit: {
            x: -10,
            opacity: 0,
        },
    }
);
