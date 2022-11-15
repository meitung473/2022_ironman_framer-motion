export const navVariants = {
    show: {
        y: 0,
        x: 0,
        transition: {
            staggerChildren: 0.1,
            duration: 0.5,
            when: "beforeChildren",
        },
    },
    hidden: {
        x: "100%",
    },
    exit: {
        opacity: 0,
        x: "100%",
        transition: {
            staggerChildren: 0.1,
            duration: 0.5,
            staggerDirection: -1,
            when: "afterChildren",
        },
    },
};
export const itemsVariants = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: 100,
        opacity: 0,
    },
};

export const indicatorVariants = {
    show: { opacity: 0 },
    hover: {
        opacity: 0.5,
    },
};
