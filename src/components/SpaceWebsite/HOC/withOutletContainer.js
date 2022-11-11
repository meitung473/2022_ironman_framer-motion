import React from "react";
import useNowNestedPath from "../hooks/useNowNestedPath";
import getDisplayName from "../utils/getDisplayName";

// for carousel content need to position with portal (HTML)
export default function withOutletContainer(CoreComponent) {
    const Wrapper = React.forwardRef((props, ref) => {
        const { children, ...restProp } = props;
        const paths = useNowNestedPath();
        return (
            <CoreComponent $path={paths[0]} ref={ref} {...restProp}>
                {children}
            </CoreComponent>
        );
    });
    Wrapper.displayName = `withOutletContainer(${getDisplayName(
        CoreComponent
    )})`;
    return Wrapper;
}
