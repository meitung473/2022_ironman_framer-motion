import { useLocation } from "react-router-dom";
import { useMemo } from "react";

// base Path : /Day19/a/b
// name match : a/b
export default function useNowNestedPath() {
    const location = useLocation();

    const paths = useMemo(() => {
        const names = location.pathname
            .match(/^\/([^\\/]+)\/?(.*)$/)[2]
            .split("/");

        return names;
    }, [location.pathname]);

    return paths;
}
