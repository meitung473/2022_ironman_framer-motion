import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import "./Carousel.style.css";

import {
    arrowVariants,
    imageVariants,
    indicatorVariants,
    TextVariants,
} from "./animate";
import carouselPic from "./pictures";

const changeImage = (dir, setter) => () => {
    let max = carouselPic.length - 1;
    if (dir > 0) {
        setter(([d, n]) => [1, n === max ? 0 : n + 1]);
    } else {
        setter(([d, n]) => [-1, n === 0 ? max : n - 1]);
    }
};
export default function Carousel() {
    const [[dir, picNumber], setPic] = useState([0, 0]);
    return (
        <div className="slideshow-container">
            <AnimatePresence custom={dir} initial={false}>
                <div className="imageBox" key={picNumber}>
                    <motion.img
                        variants={imageVariants}
                        initial={"enter"}
                        animate={"center"}
                        exit={"exit"}
                        custom={dir}
                        src={carouselPic[picNumber]}
                        alt={picNumber}
                    />
                </div>
            </AnimatePresence>
            <motion.span
                className="prev"
                onClick={changeImage(-1, setPic)}
                variants={arrowVariants}
                whileHover="hover"
            >
                ❮
            </motion.span>
            <motion.span
                className="next"
                onClick={changeImage(1, setPic)}
                variants={arrowVariants}
                whileHover="hover"
            >
                ❯
            </motion.span>
            <LayoutGroup>
                <div className="dot-group">
                    {carouselPic.map((_, index) => (
                        <motion.span
                            className="dot"
                            key={index}
                            onClick={() => {
                                if (picNumber === index) return;
                                setPic([picNumber > index ? -1 : 1, index]);
                            }}
                        >
                            {picNumber === index && (
                                <motion.span
                                    layout
                                    layoutId="dot-indicator"
                                    className="dot-indicator"
                                    variants={indicatorVariants}
                                    animate="trigger"
                                />
                            )}
                        </motion.span>
                    ))}
                </div>
            </LayoutGroup>
            <div className="numbertext" key={picNumber}>
                <motion.span
                    variants={TextVariants}
                    style={{
                        display: "inline-block",
                    }}
                    initial="hidden"
                    animate="show"
                >
                    {picNumber}
                </motion.span>
            </div>
        </div>
    );
}
