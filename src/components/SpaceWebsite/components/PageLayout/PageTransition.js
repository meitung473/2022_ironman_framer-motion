import { motion } from "framer-motion";
import { theme } from "../../style/theme";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    transform-origin: bottom center;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary.Dark};
    inset: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const variants = {
    hidden: {
        scaleX: 1,
        transformOrigin: "left center",
    },
    show: {
        scaleX: 0,
        transition: {
            delay: 0.5,
            duration: 1,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
        },
    },
    exit: {
        scaleX: [1, 1],
        scaleY: [0, 1],
        transformOrigin: "bottom center",
        transition: {
            delay: 0.5,
            duration: 1,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

export default function PageTransition() {
    return (
        <Wrapper
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
        />
    );
}
