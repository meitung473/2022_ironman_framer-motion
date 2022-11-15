import { SubContent as SubContentStyle } from "./style";
import { articleAnim } from "./animate";
import { motion } from "framer-motion";
import importImage from "../../utils/importImage";
import MotionText from "./../../components/AnimationText/index";
import {
    CarouselLayout,
    Content,
    Image as ImageStyle,
    useCarouselContext,
} from "../../components/Carousel";
import { useMemo } from "react";

function Main() {
    const { type, content } = useCarouselContext();
    if (type !== "main") return;
    const { name, description } = content;
    return (
        <Content>
            <MotionText textType="h2" words={name} />
            <motion.p variants={articleAnim}>{description}</motion.p>
        </Content>
    );
}

function SubContent() {
    const { type, content } = useCarouselContext();
    if (type !== "subContent") return;
    const { distance, travel } = content;
    return (
        <>
            {[distance, travel].map((info) => (
                <MotionText
                    key={info}
                    textType={SubContentStyle}
                    words={info}
                    splitText={" "}
                />
            ))}
        </>
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

const Carousel = (props) => {
    return (
        <CarouselLayout {...props}>
            <Main />
            <SubContent />
            <Image />
        </CarouselLayout>
    );
};

export default Carousel;
