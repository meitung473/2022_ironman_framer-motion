import { motion } from "framer-motion";
import styled from "styled-components";
import { br } from "../../../../utils/Device";
import { theme } from "./../../style/theme";
const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    padding: 0 24px;
    ${br.xl} {
        flex-direction: row;
    }
`;
const Box = styled(motion.div)`
    display: flex;
    justify-content: center;
    height: 50%;
    ${br.xl} {
        height: auto;
    }
`;
const ContentBox = styled(Box)`
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 16px;
    ${br.md} {
        height: 100%;
    }
    ${br.xl} {
        max-width: 450px;
        align-items: flex-start;
    }
    h5 {
        color: ${theme.colors.primary.Default};
    }
    p {
        ${br.xl} {
            text-align: left;
        }
    }
`;
const ActionBox = styled(Box)`
    text-align: center;
    border-radius: 50%;
    align-items: center;
    ${br.xl} {
        align-items: flex-end;
        margin: 0 auto;
    }
    h4 {
        background-color: ${({ theme }) => theme.colors.primary.Tint};
        color: ${({ theme }) => theme.colors.primary.Dark};
        width: 150px;
        height: 150px;
        line-height: 150px;
        border-radius: 50%;
        align-content: stretch;
        font-size: 20px;
        text-align: center;
        letter-spacing: 1.25px;
        ${br.md} {
            width: 242px;
            height: 242px;
            line-height: 242px;
            font-size: 32px;
            letter-spacing: 2px;
        }
        ${br.xl} {
            width: 274px;
            height: 274px;
            line-height: 274px;
            border-radius: 50%;
            align-content: stretch;
        }
    }
`;

export { Wrapper, Box, ContentBox, ActionBox };
