const imageVariants = {
    enter: (dir) => ({
        x: 500 * -dir,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
        },
    },
    exit: (dir) => ({
        zIndex: 0,
        x: 500 * dir,
        opacity: 0,
    }),
};
const indicatorVariants = {
    trigger: {
        scale: [1, 1.2, 1],
    },
};
const TextVariants = {
    hidden: {
        x: -100,
    },
    show: {
        x: 0,
    },
};
const arrowVariants = {
    hover: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
};

export { imageVariants, indicatorVariants, TextVariants, arrowVariants };
