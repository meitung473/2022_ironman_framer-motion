import {
    Suspense,
    useMemo,
    useEffect,
    useRef,
    createRef,
    useState,
} from "react";
import { PageNavigation } from "../../components";
import {
    Routes,
    Route,
    useNavigate,
    useLocation,
    Outlet,
} from "react-router-dom";
import data from "../../data/data.json";
import { Wrapper, Number, Title } from "./Page.style";
import routes from "../../routes";
import useNowNestedPath from "../../hooks/useNowNestedPath";
import { PageVariants } from "./Page.animate";
import { AnimatePresence } from "framer-motion";
import RotateLoader from "react-spinners/RotateLoader";
import { theme } from "../../style/theme";

export default function Page({ index, title }) {
    // because of first time render  ref is null
    // content will render but not on the correct spot
    // outlets container
    const outletsRef = useRef([]);
    outletsRef.current = routes[index].outlets.map((_, i) => {
        return outletsRef.current[i] || createRef();
    });

    const navigation = useNavigate();
    const paths = useNowNestedPath();
    const location = useLocation();

    const Component = useMemo(() => {
        return {
            Layout: routes[index].component,
            Carousel: routes[index].carousel,
        };
    }, [index]);

    // if path is "/crew" ,it would redirect for its page the first route
    useEffect(() => {
        if (paths.length < 2) {
            navigation(routes[index].child[0]);
        }
    }, [index, navigation, paths.length]);

    return (
        <Wrapper
            variants={PageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Routes key={paths[0]} location={location}>
                <Route
                    path="/*"
                    element={
                        <>
                            {/* title */}
                            <Title
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Number>
                                    {Math.floor((index + 1) / 10)}
                                    {(index + 1) % 10}
                                </Number>
                                {title}
                            </Title>
                            {/* layout */}

                            <Suspense
                                fallback={
                                    <RotateLoader
                                        color={theme.colors.primary.Default}
                                    />
                                }
                            >
                                <Component.Layout
                                    ref={outletsRef}
                                    navigation={
                                        <PageNavigation index={index} />
                                    }
                                >
                                    <AnimatePresence mode="wait">
                                        <Routes
                                            key={paths[1]}
                                            location={location}
                                        >
                                            <Route
                                                path="/*"
                                                element={
                                                    <>
                                                        {routes[
                                                            index
                                                        ].outlets.map(
                                                            (name, idx) => {
                                                                return (
                                                                    <Outlet
                                                                        key={
                                                                            name
                                                                        }
                                                                        context={{
                                                                            container:
                                                                                outletsRef
                                                                                    .current[
                                                                                    idx
                                                                                ],

                                                                            type: name,
                                                                        }}
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                    </>
                                                }
                                            >
                                                {data[paths[0]].map(
                                                    (current) => {
                                                        return (
                                                            <Route
                                                                key={
                                                                    current.name
                                                                }
                                                                path={
                                                                    current.name
                                                                }
                                                                element={
                                                                    <Suspense
                                                                        fallback={
                                                                            <RotateLoader
                                                                                color={
                                                                                    theme
                                                                                        .colors
                                                                                        .primary
                                                                                        .Default
                                                                                }
                                                                            />
                                                                        }
                                                                    >
                                                                        <>
                                                                            <Component.Carousel
                                                                                key={
                                                                                    current.name
                                                                                }
                                                                                content={
                                                                                    current
                                                                                }
                                                                            >
                                                                                123
                                                                            </Component.Carousel>
                                                                        </>
                                                                    </Suspense>
                                                                }
                                                            />
                                                        );
                                                    }
                                                )}
                                            </Route>
                                        </Routes>
                                    </AnimatePresence>
                                </Component.Layout>
                            </Suspense>
                        </>
                    }
                ></Route>
            </Routes>
        </Wrapper>
    );
}
