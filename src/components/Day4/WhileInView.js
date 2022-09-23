import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const direction = [
    {
        initial: {
            x: "-100%",
        },
        animate: {
            x: "0%",
        },
    },
    {
        initial: {
            x: "100%",
        },
        animate: {
            x: "0%",
        },
    },
    {
        initial: {
            y: "100%",
        },
        animate: {
            y: "0%",
        },
    },
    {
        initial: {
            y: "-100%",
        },
        animate: {
            y: "0%",
        },
    },
];
export default function WhileInView() {
    return (
        <div className="inViewBoxContainer">
            <h3>滑動我</h3>
            {direction.map(({ initial, animate }, i) => (
                <motion.div
                    key={i}
                    className="inViewBox"
                    initial={{ ...initial, opacity: 0 }}
                    whileInView={{
                        ...animate,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    #{i + 1}
                </motion.div>
            ))}
        </div>
    );
}
