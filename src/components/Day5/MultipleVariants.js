import React from "react";
import { motion } from "framer-motion";

const parent = {
    // 與 children 一起執行
    one: {
        x: 20,
    },
    // 在所有 children 動畫值行結束後才會執行
    two: {
        y: 30,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 1,
            when: "afterChildren",
        },
    },
};
// 三個都會同時執行，
const children = {
    one: { x: [10, 0, 10, 0] },
    two: {
        background: ["#aaa", "#fff"],
    },
    three: {
        x: 20, // 這個會蓋過 one 的 x
        y: [0, -10, 0],
    },
};

export default function MultipleVariants() {
    return (
        <>
            {/* parent 沒有 three ，但是有使用到字串， children 也會執行 */}
            <motion.ul variants={parent} animate={["one", "two", "three"]}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <motion.li
                        variants={children}
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
