import { theme } from "../../style/theme";
const contentVariant = {
    hidden: {
        opacity: 0,
        height: 0,
    },
    show: {
        opacity: 1,
        height: "auto",
        marginTop: 10,
    },
    exit: {
        opacity: 0,
        height: 0,
        marginTop: 0,
        transition: {
            duration: 0.5,
            opacity: {
                duration: 0.3,
            },
            height: {
                duration: 0.3,
            },
            marginTop: {
                duration: 0.5,
            },
        },
    },
};

const questionVariant = {
    show: (open) => ({
        fontWeight: open ? 700 : 400,
    }),
    hover: (open) => ({
        color: open ? theme.colors.primary.Dark : theme.colors.primary.Default,
    }),
};
export { contentVariant, questionVariant };
