import { LayoutGroup, motion } from "framer-motion";
import { Container, Indicator } from "./style";
import { itemVariants, indicatorVariants, LinkVarinats } from "./animate";
import routes from "./../../routes";
import useNowNestedPath from "../../hooks/useNowNestedPath";
import { useState, useEffect } from "react";
import { AnimationLink } from "..";

export default function PageNavigation({ index }) {
    const paths = useNowNestedPath();

    // route with correct carousel order
    const [order, setOrder] = useState(() => {
        // paths some value has space and it should be decode in plain text
        const decodePath = decodeURI(paths[paths.length - 1]);
        return routes[index].child.indexOf(decodePath);
    });

    // if not match any carousel number,just return 0
    useEffect(() => {
        if (order === -1) {
            setOrder(0);
        }
    }, [order]);

    return (
        <LayoutGroup id={paths[paths.length - 1] + "pageNavigation"}>
            <Container $path={paths[0]}>
                {routes[index].child.map((name, i) => (
                    <motion.li
                        key={name}
                        variants={itemVariants[paths[0]]}
                        custom={order === i}
                        initial={false}
                        animate="show"
                        whileHover="hover"
                    >
                        {/* now <Link> can be animate */}
                        <AnimationLink
                            variants={LinkVarinats[paths[0]]}
                            custom={order === i}
                            to={`${name}`}
                            onClick={() => setOrder(i)}
                        >
                            {/* destinations page show label name */}
                            {paths[0] === "destinations" && name}
                            {/* technology page show number */}
                            {paths[0] === "technology" && i + 1}
                            {/* page active under line animation */}
                            {order === i && (
                                <Indicator
                                    layoutId={
                                        paths[0] + "pageNavigationIndicator"
                                    }
                                />
                            )}
                            {/* hover state */}
                            <Indicator variants={indicatorVariants[paths[0]]} />
                        </AnimationLink>
                    </motion.li>
                ))}
            </Container>
        </LayoutGroup>
    );
}
