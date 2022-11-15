/**
 * input animations should be unique css property
 * @param  {...any} args
 * @returns
 */
export function combineAnim(...args) {
    return args.reduce((newAnim, anim) => {
        for (let key in anim) {
            if (!newAnim[key]) {
                newAnim[key] = anim[key];
            } else {
                newAnim[key] = {
                    ...newAnim[key],
                    ...anim[key],
                };
            }
        }
        return newAnim;
    }, {});
}
