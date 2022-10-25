const BoxVariant = {
    md: {
        hidden: {
            y: "-6.2rem",
        },
        show: {
            y: ["-6.2rem", "-6.4rem", "-6.2rem"],
            transition: {
                staggerChildren: 0.3,
                y: {
                    repeat: Infinity,
                    ease: "easeIn",
                },
            },
        },
    },
    xl: {
        show: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.3,
            },
        },
    },
};
const itemVariant = {
    show: (prop) => ({
        ...prop,
    }),
};

const mobileBoxVariant = {
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            delay: 1,
        },
    },
};
export { BoxVariant, itemVariant, mobileBoxVariant };
