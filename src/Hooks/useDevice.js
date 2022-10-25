import { useState, useEffect } from "react";
import { br } from "../utils/Device";
import { useMediaQuery } from "./useMediaqurey";

/**
 * tricky way to find out breakpoint
 * @returns {string} breakpoint
 */
const useDevice = () => {
    const [device, setDevice] = useState();
    const isSm = useMediaQuery(br.sm);
    const isMd = useMediaQuery(br.md);
    const isXl = useMediaQuery(br.xl);
    const isXxl = useMediaQuery(br.xxl);
    useEffect(() => {
        setDevice(
            (isXxl && "xxl") ||
                (isXl && "xl") ||
                (isMd && "md") ||
                (isSm && "sm")
        );
    }, [isMd, isSm, isXl, isXxl]);
    return device;
};
export default useDevice;
