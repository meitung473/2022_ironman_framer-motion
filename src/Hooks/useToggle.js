import { useState } from "react";

export default function useToggle(initialType = false) {
    const [toggle, setToggle] = useState(initialType);

    const handleToggle = (boolean) => (e) => {
        if (boolean === null || boolean === undefined) {
            setToggle((boolean) => !boolean);
            return;
        }
        setToggle(boolean);
    };
    return {
        toggle,
        handleToggle,
    };
}
