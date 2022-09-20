import React from "react";
import { motion } from "framer-motion";

const parent = {
    one: {
        x: 20,
    },
    two: {
        x: 0,
        y: 30,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 1,
            when: "afterChildren",
        },
    },
};

const listItem = {
    one: { x: [10, 0, 10, 0] },
    two: {
        background: ["#aaa", "#fff"],
    },
};

export default function MultipleVariants() {
    return (
        <>
            <h3>
                順序 : parent.one | children.one | children.two | parent.two
            </h3>
            {/* 安排多個 animate 序列*/}
            <motion.ul variants={parent} animate={["one", "two"]}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.li
                        variants={listItem}
                        style={{
                            width: "50px",
                        }}
                    >
                        {i}
                    </motion.li>
                ))}
            </motion.ul>
        </>
    );
}
