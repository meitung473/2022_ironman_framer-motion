const modalVariants = {
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
    show: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
        },
    },
};

const modalBoxVariants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
    },
};

export { modalVariants, modalBoxVariants };
