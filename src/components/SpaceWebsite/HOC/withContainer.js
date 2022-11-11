import React from "react";
import useNowNestedPath from "../hooks/useNowNestedPath";
import getDisplayName from "../utils/getDisplayName";

// for carousel container with content
export default function withContainer(CoreComponent) {
    const Wrapper = (props) => {
        const { children, ...restProp } = props;
        const paths = useNowNestedPath();
        return (
            <CoreComponent $path={paths[0]} {...restProp}>
                {children}
            </CoreComponent>
        );
    };
    Wrapper.displayName = `withContainer(${getDisplayName(CoreComponent)})`;
    return Wrapper;
}
