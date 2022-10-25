import { createGreyScale } from "../../../utils/themeMethod";

export const theme = {
    colors: {
        primary: {
            Default: "hsla(14, 88%, 65%, 1)",
            Dark: "hsla(238, 29%, 16%, 1)",
        },
        secondary: {
            Default: "hsla(240, 6%, 50%, 1)",
            Dark: "hsla(237, 12%, 33%, 1)",
        },
        backgroundGradients: {
            Default: "hsla(273, 75%, 66%, 1)",
            Dark: "hsla(240, 73%, 65%, 1)",
        },
        Dividers: "hsla(240, 5%, 91%, 1)",
        greyScale: createGreyScale(10),
    },
    typo: {
        H1: `
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
        `,
        title: `
            font-weight: 700;
            font-size: 16px;
        `,
        body: `
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 0.005em;
        `,
    },
};
