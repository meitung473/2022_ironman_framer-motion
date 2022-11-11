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
        transition: { duration: 1 },
    },
};
const exploreVariants = {
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
};
const wrapperVariants = {
    hidden: {
        opacity: 0,
        x: "-100%",
    },
    show: {
        opacity: 1,
        x: 0,
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
        boxShadow: "0 0 0 40px rgba(255,255,255,.1)",
    },
    exit: {
        scale: 1.5,
        backgroundColor: "#000",
        opacity: 0,
        transition: {
            duration: 1.5,
        },
    },
    tap: {
        scale: [1, 0.8, 1],
    },
};
export {
    exploreVariants,
    contentVariants,
    articleVariants,
    wrapperVariants,
    exploreVariant,
};
