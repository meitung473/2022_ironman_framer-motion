import { createContext } from "react";
import { useOutletContext } from "react-router-dom";
import { OverlayComponent } from "../components";
import routes from "../routes";
import getDisplayName from "./../utils/getDisplayName";

export const CarouselContext = createContext(undefined);

// for all Carousel content Wrapper
function CarouselProvider({ children, content }) {
    return (
        <CarouselContext.Provider value={content}>
            {children}
        </CarouselContext.Provider>
    );
}
// outlet context type to CarouselWrapper
const withOutletTypeComponent =
    (CarouselProvider) =>
    ({ ...args }, routeName) => {
        const CarouselWrapper = (props) => {
            // get Outlet context
            const { container, type } = useOutletContext();

            // use route name find the routes order
            const index = routes.findIndex(({ path }) => path === routeName);
            // correspond to routes container - outlet type - Carousel object
            for (let i = 0; i < routes[index].outlets.length; i++) {
                let outletName = routes[index].outlets[i];
                CarouselProvider[outletName] = args[outletName];
            }

            // return Carousel child (compound component)
            const OutletType = CarouselProvider[type];

            return (
                <OverlayComponent outlet={true} parent={container.current}>
                    <CarouselProvider {...props}>
                        <OutletType />
                    </CarouselProvider>
                </OverlayComponent>
            );
        };
        CarouselWrapper.displayName = `withOutletTypeComponent(${getDisplayName(
            CarouselProvider
        )})`;
        return CarouselWrapper;
    };

const withCarouselOutlet = withOutletTypeComponent(CarouselProvider);
export default withCarouselOutlet;
