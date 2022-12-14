import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { br } from "../../../../utils/Device";
import { withOutletContainer } from "../../HOC";

const styles = {
    destinations: css`
        gap: 1.5rem;
        grid-template-rows: repeat(5, min-content);
        ${br.md} {
            align-self: stretch;
        }
        ${br.xl} {
            align-self: center;
            grid-template-rows: min-content 1fr repeat(2, min-content);
        }
    `,
    crew: css`
        grid-template-rows: repeat(3, min-content);
        grid-row: 2 / 2;
        gap: 2rem;
        ${br.md} {
            grid-row: 1 / 1;
        }
        ${br.xl} {
            grid-column: 1 / 1;
            grid-template-rows: 2fr min-content;
            padding-bottom: 2rem;
            align-items: center;
        }
    `,
    technology: css`
        place-content: center;
        row-gap: 0.5rem;
        justify-content: center;
        ${br.md} {
            row-gap: 1rem;
        }
        ${br.xl} {
            grid-column: 2 / 2;
        }
    `,
};

const Wrapper = styled(motion.div)`
    display: grid;
    ${({ $path }) => styles[$path]}
`;
const MotionBox = withOutletContainer(Wrapper);

export default MotionBox;
