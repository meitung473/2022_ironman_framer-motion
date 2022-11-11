import { Suspense, useMemo, useEffect } from "react";
import { PageNavigation } from "../../../components";
import {
    Routes,
    Route,
    Navigate,
    useNavigate,
    useLocation,
} from "react-router-dom";
import data from "../../../data/data.json";
import { Wrapper, Number, Title } from "../Page.style";
import routes from "../../../routes";
import useNowNestedPath from "../../../hooks/useNowNestedPath";
import { PageVariants } from "../Page.animate";

export default function PagePropagation({ index, title, device }) {
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
            variants={PageVariants[device]}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Routes key={paths[0]} location={location}>
                {/* if not match any route, it will redirect the first route */}
                <Route
                    path="*"
                    element={<Navigate to={`./${routes[index].child[0]}`} />}
                />
                <Route
                    path="/"
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
                            <Suspense fallback={<>loading</>}>
                                <Component.Layout
                                    navigation={
                                        <PageNavigation index={index} />
                                    }
                                />
                            </Suspense>
                        </>
                    }
                >
                    {data[paths[0]].map((current) => {
                        return (
                            <Route
                                // change it
                                key={current.name}
                                path={current.name}
                                element={
                                    <Suspense fallback={<>123</>}>
                                        <Component.Carousel
                                            key={current.name}
                                            content={current}
                                        />
                                    </Suspense>
                                }
                            />
                        );
                    })}
                </Route>
            </Routes>
        </Wrapper>
    );
}

// context={
//     <Suspense
//         fallback={
//             <>loading</>
//         }
//     >
//         <Component.Carousel
//             type="main"
//             content={
//                 data[
//                     paths[0]
//                 ][
//                     carouselNumber
//                 ]
//             }
//         />
//     </Suspense>
// }
