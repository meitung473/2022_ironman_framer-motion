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
                    type: "spring", // π ε½η°§
                    damping: 5, // π ζΈι
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
                    type: "tween", // π θ£ιεη«
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
                    type: "inertia", // π ζ£ζ§εη«
                    velocity: 200, // π ιεΊ¦
                    power: 0.5, // π εηοΌθΆε€§θΆη¨ε
                }}
            >
                inertia
            </motion.div>
        </div>
    );
}
