import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
const faces = ["🤔", "😡", "😅", "😐", "😀", "😄", "🥰"];
const color = ["#aaa", "#f00", "#0ea", "#0aa", "#fa2", "#fe2", "#fae"];

function pointer2Range(pointerX) {
    const number = Math.round(pointerX / 60);
    if (number <= 1) return 1;
    if (number >= 6) return 6;
    return number;
}

export default function WhileDrag() {
    const boxRef = useRef(null);
    const sliderRef = useRef(null);
    const [range, setRange] = useState(0);
    return (
        <>
            <h3>ref 取得框中範圍</h3>
            <div
                ref={boxRef}
                style={{
                    marginLeft: 100,
                    width: 400,
                    height: 200,
                    border: "1px solid black",
                }}
            >
                <motion.span
                    style={{
                        display: "inline-block",
                        cursor: "grab",
                    }}
                    drag={true}
                    transition={{
                        type: "inertia",
                        velocity: 300,
                    }}
                    initial={{
                        fontSize: 60,
                    }}
                    dragConstraints={boxRef}
                >
                    🏀
                </motion.span>
            </div>
            <h3>單一方向 toggle</h3>

            <motion.span
                style={{
                    display: "inline-block",
                    cursor: "grab",
                    marginTop: 0,
                    fontSize: 60,
                }}
                drag="x"
                whileDrag={{
                    fontSize: 24,
                }}
                dragConstraints={{ left: 100, right: 300 }}
            >
                ⚽
            </motion.span>

            <h3>自定義 range slider</h3>
            <motion.div
                className="slider"
                ref={sliderRef}
                animate={{
                    background: color[range],
                }}
            >
                <motion.span
                    className="slider-thumb"
                    drag="x"
                    dragConstraints={sliderRef}
                    dragElastic={0}
                    whileDrag={{
                        scale: 1.5,
                        cursor: "grabbing",
                    }}
                    dragTransition={{
                        bounceDamping: 100,
                    }}
                    onDrag={(e, info) => {
                        setRange(pointer2Range(info.point.x));
                    }}
                    onDragEnd={(e, info) => {
                        setRange(pointer2Range(info.point.x));
                    }}
                >
                    {faces[range]}
                </motion.span>
            </motion.div>
        </>
    );
}
