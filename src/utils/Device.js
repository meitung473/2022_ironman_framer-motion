const sizes = {
    xxl: 1367,
    xl: 996,
    md: 768,
    sm: 576,
};
// media
const prefix = "@media screen and (min-width: {size}px)";

// 代替所有的
export const br = Object.keys(sizes).reduce((p, n) => {
    p[n] = prefix.replace("{size}", sizes[n]);
    return p;
}, {});
