import { breakpointSizes } from "../../../../utils/Device";
import importImage from "../../utils/importImage";
import {
    CarouselLayout,
    Content,
    Image as ImageStyle,
    useCarouselContext,
} from "../../components/Carousel";
import MotionText from "./../../components/AnimationText/index";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { defaultArticleAnim } from "../../animation";
function Main() {
    const { type, content } = useCarouselContext();
    if (type !== "main") return;
    const { name, description } = content;
    return (
        <Content>
            <MotionText textType="h3" words={name} splitText={" "} />
            <motion.p variants={defaultArticleAnim}>{description}</motion.p>
        </Content>
    );
}

function Image() {
    const { type, content } = useCarouselContext();
    const { images, name } = content;
    const defaultSrc = useMemo(
        () => require("../../assets/" + importImage(images.portrait)),
        [images.portrait]
    );
    if (type !== "image") return;

    return (
        <ImageStyle name={name} defaultSrc={defaultSrc}>
            <source
                srcSet={require("../../assets/" +
                    importImage(images.landscape))}
                type="image/jpg"
                media={`(max-width:${breakpointSizes.xl}px)`}
            />
        </ImageStyle>
    );
}

function Carousel(props) {
    return (
        <CarouselLayout {...props}>
            <Main />
            <Image />
        </CarouselLayout>
    );
}

export default Carousel;
