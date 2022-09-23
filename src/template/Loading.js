import React from "react";
import { motion } from "framer-motion";

const loadingStyle = {
    display: "inline-block",
    position: "relative",
    width: "80px",
    height: "80px",
    backgroundColor: "red",
    "&::before": {
        content: `" 123"`,
        display: "block",
        borderRadius: "50%",
        width: 0,
        height: 0,
        margin: "8px",
        boxSizing: "border-box",
        border: "32px solid #ff0",
        borderColor: "#ff0 transparent #ff0 transparent",
    },
};

export default function Loading() {
    return (
        <motion.div
            style={loadingStyle}
            animate={{
                rotate: [0, 900, 1800],
            }}
            transition={{
                ease: "ease",
                duration: 1.5,
            }}
        />
    );
}
