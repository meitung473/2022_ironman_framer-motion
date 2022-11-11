import Content from "../shared/components/Content";
import Image from "../shared/components/Image";
import importImage from "./../../utils/importImage";
import { motion, useAnimationControls } from "framer-motion";
import { defaultScaleAnim } from "./../../animation/index";
import { useContext } from "react";
import withCarouselOutlet, {
    CarouselContext,
} from "../../HOC/withCarouselOutlet";
import routes from "../../routes";

function Main() {
    const { role, name, bio } = useContext(CarouselContext);
    return (
        <Content>
            <h4>{role}</h4>
            <h3>{name}</h3>
            <p>{bio}</p>
        </Content>
    );
}

function MImage() {
    const { images, name } = useContext(CarouselContext);
    const controls = useAnimationControls();
    return (
        <Image variants={defaultScaleAnim}>
            <picture>
                <source
                    srcSet={require("../../assets/" + importImage(images.webp))}
                    type="image/webp"
                />
                <motion.img
                    key={name}
                    src={require("../../assets/" + importImage(images.png))}
                    alt={name}
                    onLoad={() => {
                        // 啟動 image 容器動畫
                        (async () => {
                            await controls.start("show");
                        })();
                    }}
                />
            </picture>
        </Image>
    );
}

const Carousel = withCarouselOutlet(
    { Main: Main, Image: MImage },
    routes[1].path
);
export default Carousel;
