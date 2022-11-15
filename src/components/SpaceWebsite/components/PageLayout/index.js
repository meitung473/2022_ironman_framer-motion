import { Suspense, useMemo, useEffect, useRef } from "react";
import { PageNavigation } from "..";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import data from "../../data/data.json";
import { Wrapper, Number, Title } from "./style";
import routes from "../../routes";
import useNowNestedPath from "../../hooks/useNowNestedPath";
import { PageVariants } from "./animate";
import { AnimatePresence } from "framer-motion";
import RotateLoader from "react-spinners/RotateLoader";
import { theme } from "../../style/theme";
import PageTransition from "./PageTransition";

export default function PageLayout({ index, title, firstVisit }) {
    const paths = useNowNestedPath();
    const location = useLocation();
    const navigate = useNavigate();
    const firstLoadPage = useRef(true);
    /**
     * in the same child route : /crew/* , /destinations/*, /technology/*
     * shared the same layout
     */
    const Component = useMemo(() => {
        return {
            Layout: routes[index].component,
            Carousel: routes[index].carousel,
        };
    }, [index]);

    /**
     * if user enter nested route at first or refreshing page
     * <Outlet/> not render anything QQ
     * I navigate to correct path at the first visit.
     *
     * Let's remove it, you will see the difference
     */
    useEffect(() => {
        if (paths[1] && firstVisit) {
            navigate(decodeURI(paths[1]));
        }
    }, [firstVisit, navigate, paths]);
    useEffect(() => {
        firstLoadPage.current = false;
    }, []);
    return (
        <Wrapper
            variants={PageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            $path={paths[0]}
        >
            <PageTransition />
            {/* for route change : crew => destination, it will animate page transition */}
            <Title>
                <Number>
                    {Math.floor((index + 1) / 10)}
                    {(index + 1) % 10}
                </Number>
                {title}
            </Title>

            <AnimatePresence mode="wait">
                <Suspense
                    key={paths[1]}
                    fallback={
                        <RotateLoader color={theme.colors.primary.Default} />
                    }
                >
                    <Routes key={paths[1]} location={location}>
                        <Route
                            key={location.key}
                            path="/*"
                            element={
                                <Component.Layout
                                    navigation={
                                        <PageNavigation index={index} />
                                    }
                                    firstLoad={firstLoadPage}
                                />
                            }
                        >
                            <Route
                                index
                                element={
                                    <Component.Carousel
                                        content={data[paths[0]][0]}
                                    />
                                }
                            />

                            {data[paths[0]].map((current) => {
                                return (
                                    <Route
                                        key={location.key}
                                        path={current.name}
                                        element={
                                            <Component.Carousel
                                                content={current}
                                            />
                                        }
                                    />
                                );
                            })}
                        </Route>
                    </Routes>
                </Suspense>
            </AnimatePresence>
        </Wrapper>
    );
}
