import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const AccordionGlobalStyle = createGlobalStyle`
    h1{
        ${theme.typo.H1}
    }
    p{
        ${theme.typo.body}
    }
`;

export { AccordionGlobalStyle };
