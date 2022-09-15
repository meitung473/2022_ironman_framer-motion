import { motion } from "framer-motion";
import React from "react";
import "./style.css";

export default function TransitionTypes() {
    return (
        <div className="section">
            <motion.div
                className="box"
                animate={{
                    y: 100,
                }}
                transition={{
                    ease: "circInOut",
                    duration: 2,
                    delay: 0.5,
                    type: "spring", // 👉 彈簧
                    damping: 5, // 👉 減震
                }}
            >
                spring
            </motion.div>

            <motion.div
                className="box"
                animate={{
                    y: 100,
                }}
                transition={{
                    ease: "backOut",
                    duration: 2,
                    delay: 0.5,
                    type: "tween", // 👉 補間動畫
                }}
            >
                tween
            </motion.div>
            <motion.div
                className="box"
                animate={{
                    y: 100,
                }}
                transition={{
                    ease: "linear",
                    duration: 2,
                    delay: 0.5,
                    type: "inertia", // 👉 慣性動畫
                    velocity: 200, // 👉 速度
                    power: 0.5, // 👉 功率，越大越用力
                }}
            >
                inertia
            </motion.div>
        </div>
    );
}
