import { breakpointSizes } from "../../../../utils/Device";
import { Content, Image } from "../shared";
import importImage from "../../utils/importImage";
import { useContext } from "react";
import withCarouselOutlet, {
    CarouselContext,
} from "../../HOC/withCarouselOutlet";
import routes from "../../routes";
import { motion } from "framer-motion";
function Main() {
    const { name, description } = useContext(CarouselContext);
    return (
        <Content>
            <h3>{name}</h3>
            <p>{description}</p>
        </Content>
    );
}
function TImage() {
    const { name, images } = useContext(CarouselContext);
    return (
        <Image layout>
            <picture>
                <source
                    srcSet={require("../../assets/" +
                        importImage(images.landscape))}
                    type="image/jpg"
                    media={`(max-width:${breakpointSizes.xl}px)`}
                />
                <motion.img
                    key={name}
                    src={require("../../assets/" +
                        importImage(images.portrait))}
                    alt={name}
                />
            </picture>
        </Image>
    );
}

const Carousel = withCarouselOutlet(
    { Main: Main, Image: TImage },
    routes[2].path
);
export default Carousel;
