import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { br } from "../../../../utils/Device";

const path2Style = {
    technology: css`
        ${br.xl} {
            grid-template-rows: repeat(2, min-content);
        }
    `,
};
const Wrapper = styled(motion.main)`
    flex-grow: 1;
    h5 {
        text-align: center;
    }

    ${br.md} {
        display: grid;
        grid-template-rows: min-content 1fr;
        place-items: center;
        h5 {
            justify-self: start;
        }
    }
    ${({ $path }) => path2Style?.[$path]}
`;
const Title = styled(motion.h5)`
    ${br.md} {
        margin-left: 8rem;
    }
    ${br.xl} {
        margin-left: 8rem;
    }
`;
const Number = styled.span`
    opacity: 0.25;
    margin-right: 28px;
    overflow: visible;
`;
export { Wrapper, Number, Title };
