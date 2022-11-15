import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useNowNestedPath from "../../../hooks/useNowNestedPath";
import { Wrapper } from "./style";
import { loadingVariants, imageVariants } from "./animate";

const Image = ({ name, defaultSrc, children }) => {
    const [loadingImage, setLoadingImage] = useState(true);
    const [flashing, setFlashing] = useState(true);

    const paths = useNowNestedPath();

    useEffect(() => {
        if (loadingImage) return;
        setTimeout(() => {
            setFlashing(false);
        }, 500);
    }, [loadingImage]);

    return (
        <Wrapper
            $path={paths[0]}
            variants={loadingVariants}
            custom={flashing}
            animate={loadingImage ? "loading" : "static"}
        >
            <picture>
                {children}
                <motion.img
                    key={name}
                    src={defaultSrc}
                    alt={name}
                    style={{
                        transformOrigin: "bottom center",
                    }}
                    variants={imageVariants}
                    animate="show"
                    initial="hidden"
                    exit="exit"
                    custom={loadingImage}
                    onLoad={() => {
                        setLoadingImage(false);
                    }}
                />
            </picture>
        </Wrapper>
    );
};

export default Image;
