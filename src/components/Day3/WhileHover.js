import React from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function WhileHover() {
    return (
        <motion.div
            className="heart"
            initial={{
                x: 100,
                rotate: 45,
            }}
            whileHover={{
                scale: [0.9, 1.2, 1],
                x: [100, 120, 100, 90, 100],
            }}
            transition={{
                repeat: 3,
                duration: 0.3,
                type: "spring",
                damping: 10,
                ease: "easeInOut",
            }}
        />
    );
}
