import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { br } from "../../../../../utils/Device";
import { withContainer } from "../../../HOC";

const styles = {
    destinations: css`
        grid-row: 2 / 4;
        h2 {
            color: #fff;
        }
        p {
            text-align: center;
        }
        ${br.md} {
            grid-row: 2 / 4;
            height: 15rem;
        }
        ${br.xl} {
            grid-row: 2 / 2;
            height: 14.5rem;
            display: flex;
            justify-content: center;
            p {
                text-align: left;
            }
        }
    `,
    crew: css`
        gap: 1rem;
        h3,
        h4,
        p {
            text-align: center;
        }

        ${br.xl} {
            h3,
            h4,
            p {
                text-align: left;
            }
        }
    `,
    technology: css`
        padding: 0 1.5rem 2rem;
        row-gap: 0.5rem;
        ${br.md} {
            padding: 0 10rem 2rem;
            gap: 1rem;
        }
        ${br.xl} {
            padding: 0;
            grid-column: 2 / 2;
            h3,
            p {
                text-align: left;
            }
        }
    `,
};

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    ${({ $path }) => styles[$path]}
`;

const Content = withContainer(Wrapper);

export default Content;
