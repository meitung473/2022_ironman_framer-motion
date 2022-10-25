/**
 * 產生 0 - 1000 的灰階
 * @param {Number} scaleoffset
 * @returns 回傳物件
 */
export function createGreyScale(scaleoffset) {
    let b = "hsla(0, 0%, {x}%, 1)";
    return Array.from({ length: scaleoffset + 1 }).reduce((p, n, i) => {
        let key = `black_${(scaleoffset - i) * 100}`;
        n = b.replace("{x}", i * 10);
        p[key] = n;
        return p;
    }, {});
}

/**
 * 調整 color 的透明度，使用 hsla
 * @param {String} $color
 * @param {Number} value
 * @returns
 */
export function adjustAphla(color, value) {
    return color.replace(/(\d.?)\)$/, `${value})`);
}
