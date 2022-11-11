import styled from "styled-components";
import { br } from "../../../../utils/Device";
import { NavText } from "../../style/Typo";
import { theme } from "./../../style/theme";

const SubTitle = styled(NavText)`
    text-transform: uppercase;
    color: ${theme.colors.primary.Default};
    text-align: center;
    ${br.xl} {
        text-align: left;
        grid-column: 2 / 2;
    }
`;

export { SubTitle };
