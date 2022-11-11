import { SubContent } from "../style";
import {
    imageAnim,
    subContentAnim,
    wrapperAnim,
    articleAnim,
} from "../animate";
import { motion, useAnimationControls } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Content, Image } from "../../shared";
import importImage from "../../../utils/importImage";
import MotionText from "../../../components/AnimationText/index";

const Carousel = ({ content }) => {
    const type = useOutletContext();
    const { name, description, distance, travel, images } = content;
    const controls = useAnimationControls();

    switch (type) {
        case "main": {
            return (
                <>
                    <Content variants={wrapperAnim}>
                        <MotionText textType="h2" words={name} />
                        <motion.p variants={articleAnim}>
                            {description}
                        </motion.p>
                    </Content>
                </>
            );
        }
        case "subContent": {
            return (
                <>
                    {[distance, travel].map((content) => (
                        <SubContent key={content} variants={subContentAnim}>
                            {content}
                        </SubContent>
                    ))}
                </>
            );
        }
        case "image": {
            return (
                <Image
                    variants={imageAnim}
                    initial="hidden"
                    animate={controls}
                    exit="exit"
                >
                    <picture>
                        <source
                            // srcSet={require("../../assets/" +
                            //     importImage(images.webp))}
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
                            // src={require("../../assets/" +
                            //     importImage(images.png))}
                            alt={name}
                        />
                    </picture>
                </Image>
            );
        }
        default:
            return <></>;
    }
};
export default Carousel;
