import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { Container } from "./SpacePage.style";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes";
import { Header, PageLayout } from "./components";
import { Home } from "./Page";
import BaseStyle from "./style/BaseStyle";
import useNowNestedPath from "./hooks/useNowNestedPath";
import { useEffect, useRef } from "react";

export default function SpaceWebsite() {
    const location = useLocation();
    const paths = useNowNestedPath();

    /* 
        child routes outlet not render at first visit
        it would match next render
        to do this, I check if the first visit in app
        and after render false it
        
        in Page layout navigate to correct path
        it's not a correct way, but it really solve my problem at the first render 

        check Docs : https://reactrouter.com/en/main/start/concepts#outlets
    */
    const firstVisit = useRef(true);
    useEffect(() => {
        firstVisit.current = false;
    }, []);
    return (
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap"
                rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
                rel="stylesheet"
            ></link>
            <ThemeProvider theme={theme}>
                <BaseStyle />
                <Container $imagePath={paths[0]}>
                    <Header />
                    <AnimatePresence mode="wait">
                        <Routes key={paths[0]} location={location}>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home />} />
                            {routes.map((route, index) => {
                                return (
                                    <Route
                                        key={location.pathname}
                                        path={`/${route.path}/*`}
                                        element={
                                            <PageLayout
                                                index={index}
                                                title={route.title}
                                                firstVisit={firstVisit.current}
                                            />
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </AnimatePresence>
                </Container>
            </ThemeProvider>
        </>
    );
}
