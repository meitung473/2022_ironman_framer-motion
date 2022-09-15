import { motion } from "framer-motion";
import React from "react";
import "./style.css";

// keyframes 影格
export default function SquareAnimation() {
    return (
        <motion.div
            className="box"
            animate={{
                x: [0, 100, 100, 0, 0],
                y: [0, 0, 100, 100, 0],
            }}
        >
            SquareAnimation
        </motion.div>
    );
}
