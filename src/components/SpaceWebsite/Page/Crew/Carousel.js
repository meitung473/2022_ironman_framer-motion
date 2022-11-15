import importImage from "./../../utils/importImage";
import {
    CarouselLayout,
    Content,
    Image as ImageStyle,
    useCarouselContext,
} from "../../components/Carousel";
import MotionText from "../../components/AnimationText";
import { withOutletContainer } from "../../HOC";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { defaultArticleAnim, defaultOpacityAnim } from "../../animation";
import { combineAnim } from "../../animation/combineAnim";

const H4Variants = combineAnim(defaultOpacityAnim, {
    hidden: {
        x: "-100%",
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 0.4,
        transition: {
            type: "tween",
            ease: "easeInOut",
            delay: 0.8,
            duration: 0.5,
        },
    },
    exit: {
        x: "-100%",
        opacity: 0,
    },
});

function Main() {
    const { type, content } = useCarouselContext();
    if (type !== "main") return;
    const { role, name, bio } = content;
    return (
        <Content>
            <motion.h4 variants={H4Variants}>{role}</motion.h4>
            <MotionText textType={"h3"} words={name} splitText={" "} />
            <motion.p variants={defaultArticleAnim}>{bio}</motion.p>
        </Content>
    );
}

function Image() {
    const { type, content } = useCarouselContext();
    const { images, name } = content;
    const defaultSrc = useMemo(
        () => require("../../assets/" + importImage(images.png)),
        [images.png]
    );
    if (type !== "image") return;
    return (
        <ImageStyle name={name} defaultSrc={defaultSrc}>
            <source
                srcSet={require("../../assets/" + importImage(images.webp))}
                type="image/webp"
            />
        </ImageStyle>
    );
}

const CarouselWrapper = (props) => {
    return (
        <CarouselLayout {...props}>
            <Main />
            <Image />
        </CarouselLayout>
    );
};
const Carousel = withOutletContainer(CarouselWrapper);
export default Carousel;
