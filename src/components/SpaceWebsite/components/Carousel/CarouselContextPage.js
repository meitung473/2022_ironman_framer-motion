import React, { useMemo, createContext, useContext } from "react";
import { useOutletContext } from "react-router-dom";

const CarouselContext = createContext(null);

export function useCarouselContext() {
    const context = useContext(CarouselContext);
    if (context === undefined) throw Error("no Carousel Provider on the top.");
    return context;
}

export function CarouselLayout({ content, children }) {
    const type = useOutletContext();
    const value = useMemo(() => {
        return {
            content,
            type,
        };
    }, [content, type]);
    return (
        <CarouselContext.Provider value={value}>
            {children}
        </CarouselContext.Provider>
    );
}
