import { motion } from "framer-motion";
import styled from "styled-components";
import { br } from "../../utils/Device";

const Container = styled(motion.main)`
    max-width: 1440px;
    min-width: 375px;
    max-height: 100%;
    min-height: 100vh;
    position: relative;
    font-family: "Kumbh Sans", sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme }) =>
        `linear-gradient(0deg, ${theme.colors.backgroundGradients.Dark} 4.04%, ${theme.colors.backgroundGradients.Default} 100%);`};

    overflow: hidden;
    ${br.md} {
        margin: 0 auto;
    }
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;

    margin: 8rem auto 3.5rem;
    background-color: ${({ theme }) => theme.colors.greyScale.black_0};
    box-shadow: 0px 10px 33px rgba(0, 0, 0, 0.44);
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    ${br.md} {
        margin: 6em 1em 2em;
        flex-direction: row;
    }
`;

const Box = styled(motion.div)`
    width: 100%;
    flex: 1 0 50%;
    padding: 2.25rem 1rem 2.5rem;
    margin: 0 auto;
    position: relative;
    overflow: visible;
    z-index: 2;
    ${br.md} {
        padding: 5rem 2.5rem;
    }
`;

const Title = styled.h1`
    text-align: center;
    ${br.md} {
        text-align: left;
    }
`;

const SVGContainer = styled(Box)`
    position: relative;
    padding: 0;
    overflow: visible;
    margin-bottom: 6rem;
    display: flex;
    justify-content: center;
    ${br.md} {
        margin-bottom: 0;
        overflow: hidden;
        align-self: stretch;
    }
`;

export { Box, Container, Wrapper, Title, SVGContainer };
