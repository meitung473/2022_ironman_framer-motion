const ContainerVariants = {
    md: {
        show: {
            x: "-4.4rem",
            y: "2.8rem",
            opacity: 1,
            transition: {
                delay: 1,
            },
        },
        float: {
            y: ["2.8rem", "2.5rem", "2.8rem"],
            transition: {
                repeat: Infinity,
            },
        },
    },
    xl: {
        show: {
            x: "-4.6rem",
            y: "3.8rem",
            opacity: 1,
            transition: {
                delay: 1,
            },
        },
        float: {
            y: ["3.8rem", "3.5rem", "3.8rem"],
            transition: {
                repeat: Infinity,
            },
        },
    },
    xxl: {
        show: {
            x: "-5.5rem",
            y: "4.5rem",
            opacity: 1,
            transition: {
                delay: 1,
            },
        },
        float: {
            y: ["4.5rem", "4rem", "4.5rem"],
            transition: {
                repeat: Infinity,
            },
        },
    },
};

export { ContainerVariants };
