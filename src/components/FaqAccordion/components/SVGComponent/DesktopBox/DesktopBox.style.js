import { motion } from "framer-motion";
import styled from "styled-components";
import { br } from "../../../../../utils/Device";

const Wrapper = styled(motion.div)`
    position: absolute;
    left: 0;
    z-index: 3;
    display: none;
    justify-content: center;
    align-items: center;

    ${br.md} {
        display: inline-block;
    }
    opacity: ${({ device }) => (device ? 1 : 0)};
`;
const Container = styled(motion.svg)`
    position: relative;
    top: 0;
    left: 0;

    ${br.md} {
        width: 75%;
        height: 75%;
    }
    ${br.xl} {
        width: 80%;
        height: 80%;
    }
    ${br.xxl} {
        width: 100%;
        height: 100%;
    }
`;

export { Wrapper, Container };
