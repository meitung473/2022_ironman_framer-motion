import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

import { Container } from "./SpacePage.style";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import routes from "./routes";

import { Header } from "./components";
import { Home } from "./Page";
import { Page } from "./Page/shared";
import BaseStyle from "./style/BaseStyle";
import useNowNestedPath from "./hooks/useNowNestedPath";

export default function SpaceWebsite() {
    const location = useLocation();
    const paths = useNowNestedPath();

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
                                            <Page
                                                index={index}
                                                title={route.title}
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
