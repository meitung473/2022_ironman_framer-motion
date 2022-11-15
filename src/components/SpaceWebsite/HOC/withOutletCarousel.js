import { createContext, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import getDisplayName from "./../utils/getDisplayName";

const CarouselContext = createContext(null);

export function useCarouselContext() {
    const context = useContext(CarouselContext);
    if (context === undefined) throw Error("no CarouselProvider on the top.");
    return context;
}

export const OutletCarouselHoc = (CoreCarousel) => {
    function OutletCarousel({ content }) {
        const type = useOutletContext();
        return (
            <CarouselContext.Provider value={content}>
                {CoreCarousel[type]}
            </CarouselContext.Provider>
        );
    }
    OutletCarousel.displayName = `withContainer(${getDisplayName(
        CoreCarousel
    )})`;
    return OutletCarousel;
};
