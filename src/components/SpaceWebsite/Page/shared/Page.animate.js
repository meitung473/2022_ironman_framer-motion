const mobile = {
    hidden: {
        x: -30,
        opacity: 0,
    },
    show: {
        opacity: 1,
        x: 0,
    },
    exit: {
        x: 30,
        opacity: 0,
    },
};
const desktop = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.4,
            staggerDirection: -1,
            duration: 1,
        },
    },
};

export const PageVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.4,
            staggerDirection: -1,
            duration: 1,
        },
    },
};
