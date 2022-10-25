import { ThemeProvider } from "styled-components";

import { ResetStyle } from "../../utils/globalStyle";
import { br } from "../../utils/Device";
import { AccordionGlobalStyle } from "./style/GlobalStyle";

import {
    Container,
    Wrapper,
    Title,
    Box,
    SVGContainer,
} from "./FaqAccordion.style";
import { theme } from "./style/theme";

import { Accordion, MobileSVG, DesktopBox, DesktopSVG } from "./components";

import data from "./doc/content.json";
import { useMediaQuery } from "./../../Hooks/useMediaqurey";

export default function FaqAccordion() {
    const isMd = useMediaQuery(br.md);
    return (
        <ThemeProvider theme={theme}>
            <ResetStyle />
            <AccordionGlobalStyle />
            <Container>
                <Wrapper>
                    {/* SVG component */}
                    <SVGContainer>
                        {isMd ? <DesktopSVG /> : <MobileSVG />}
                    </SVGContainer>
                    {isMd && <DesktopBox />}
                    {/* main */}
                    <Box>
                        <Title>FAQ</Title>
                        {data.map(({ question, answer }) => (
                            <Accordion
                                key={question}
                                question={question}
                                answer={answer}
                            />
                        ))}
                    </Box>
                </Wrapper>
            </Container>
        </ThemeProvider>
    );
}
