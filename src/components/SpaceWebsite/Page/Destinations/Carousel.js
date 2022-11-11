import { SubContent } from "./style";
import { imageAnim, wrapperAnim, articleAnim } from "./animate";
import { motion, useAnimationControls } from "framer-motion";
import { Content, Image } from "../shared";
import importImage from "../../utils/importImage";
import MotionText from "./../../components/AnimationText/index";
import withCarouselOutlet, {
    CarouselContext,
} from "../../HOC/withCarouselOutlet";
import { useContext } from "react";
import routes from "../../routes";

function Main() {
    const { name, description } = useContext(CarouselContext);

    return (
        <>
            <Content
                variants={wrapperAnim}
                exit="exit"
                initial="hidden"
                animate="show"
            >
                {/* <motion.h2 variants={articleAnim}>{name}</motion.h2> */}
                <MotionText textType="h2" words={name} />
                <motion.p variants={articleAnim}>{description}</motion.p>
            </Content>
        </>
    );
}

function DSubContent() {
    const { distance, travel } = useContext(CarouselContext);
    return (
        <>
            {[distance, travel].map((info) => (
                <MotionText key={info} textType={SubContent} words={info} />
            ))}
        </>
    );
}
function DImage() {
    const controls = useAnimationControls();
    const { name, images } = useContext(CarouselContext);
    return (
        <Image
            variants={imageAnim}
            initial="hidden"
            animate={controls}
            exit="exit"
        >
            <picture>
                <source
                    srcSet={require("../../assets/" + importImage(images.webp))}
                    type="image/webp"
                />

                <motion.img
                    key={name}
                    onLoad={() => {
                        // 啟動 image 容器動畫
                        (async () => {
                            await controls.start("show");
                        })();
                    }}
                    src={require("../../assets/" + importImage(images.png))}
                    alt={name}
                />
            </picture>
        </Image>
    );
}

const Carousel = withCarouselOutlet(
    {
        Image: DImage,
        Main: Main,
        SubContent: DSubContent,
    },
    routes[0].path
);
export default Carousel;
