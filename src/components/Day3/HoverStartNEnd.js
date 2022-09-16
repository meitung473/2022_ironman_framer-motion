import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

// 設定中間邊界最大值與最小值
let side = [
    {
        minX: 113,
        maxX: 190,
    },
];

export default function HoverStartNEnd() {
    const [hover, setHover] = useState(false);
    const [handSide, setHandSide] = useState(null);

    const detectSide = useCallback((e, { point }) => {
        if (point.x <= side[0].maxX && point.x >= side[0].minX) {
            setHandSide(0); // 中間
        }
        if (point.x <= side[0].minX) {
            setHandSide(-1); // 左邊
        }
        if (point.x >= side[0].maxX) {
            setHandSide(1); // 右邊
        }
    }, []);

    return (
        <>
            <h3>我站在雲林裡</h3>
            <motion.div
                style={{
                    display: "flex",
                    fontSize: 60,
                }}
                onHoverStart={() => {
                    setHover(true);
                }}
                onHoverEnd={() => {
                    setHover(false);
                }}
            >
                <motion.span
                    animate={{
                        scaleY: hover ? [1, -1, 1] : 1,
                    }}
                    transition={{
                        repeat: hover ? Infinity : null,
                    }}
                >
                    {hover ? "👆" : "🎶"}
                </motion.span>
                <motion.div>{hover ? "😑" : "😌"}</motion.div>
                <motion.span
                    animate={{
                        scaleY: hover ? [1, -1, 1] : 1,
                    }}
                    transition={{
                        repeat: hover ? Infinity : null,
                    }}
                >
                    {hover ? "👇" : "🎶"}
                </motion.span>
            </motion.div>
            <h3>翻開覆蓋的卡 !</h3>
            <motion.div
                className="tab"
                onHoverStart={detectSide}
                onHoverEnd={() => setHandSide(null)}
            >
                <motion.span
                    className="poker"
                    animate={{
                        scaleX: handSide === -1 ? 1 : -1,
                    }}
                />
                <motion.span
                    className="poker"
                    animate={{
                        scaleX: handSide === 0 ? 1 : -1,
                    }}
                />
                <motion.span
                    className="poker"
                    animate={{
                        scaleX: handSide === 1 ? 1 : -1,
                    }}
                />
            </motion.div>
        </>
    );
}
