import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { br } from "../../utils/Device";
import routes from "./routes";

const path2backgroundImage = (path) => {
    let sm = "mobile";
    let md = "tablet";
    let xl = "desktop";

    const requireFileWithSize = (size) =>
        require(`./assets/${path}/background-${path}-${size}.jpg`);

    return css`
        background-image: url("${requireFileWithSize(sm)}");
        ${br.md} {
            background-image: url("${requireFileWithSize(md)}");
        }
        ${br.xl} {
            background-image: url("${requireFileWithSize(xl)}");
        }
    `;
};

const Container = styled(motion.main)`
    margin: 0 auto;
    max-width: 1440px;
    min-width: 375px;
    min-height: 100vh;
    width: 100%;
    flex: 1 0 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: bottom;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.primary.Dark};
    transition: background-image 0.5s ease-in-out 1.4s;
    ${({ $imagePath }) => {
        let renderPath = null;
        if (!$imagePath) renderPath = "home";
        else if ($imagePath === routes[0].path) {
            renderPath = routes[0].path.slice(0, -1);
        } else renderPath = $imagePath;
        return path2backgroundImage(renderPath);
    }}
`;

export { Container };
