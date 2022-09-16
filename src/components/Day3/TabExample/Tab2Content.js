import React, { useState } from "react";
import { motion } from "framer-motion";
import { tab, tabBtn, tabContent, container } from "./Tab2Content.style";

const cities = [
    {
        name: "London",
        content: "London is the capital city of England.",
    },
    {
        name: "Paris",
        content: "Paris is the capital of France.",
    },
    {
        name: "Tokyo",
        content: "Tokyo is the capital of Japan.",
    },
    {
        name: "臺北",
        content: "臺北是臺灣的首都。",
    },
];

export default function Tab2Content() {
    const [city, setCity] = useState(null);
    return (
        <>
            <p>
                <a href="https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_hover_tabs">
                    W3school 原始範例
                </a>
            </p>
            <div style={container}>
                <div style={tab}>
                    {cities.map(({ name }) => (
                        <motion.button
                            key={name}
                            style={tabBtn}
                            animate={{
                                background: city === name ? "#aaa" : "#f1f1f1",
                            }}
                            whileHover={{
                                background: ["#aaa", "#ccc", "#aaa"],
                            }}
                            whileTap={{
                                fontSize: "24px",
                            }}
                            onTap={() => setCity(name)}
                            onHoverStart={() => setCity(name)}
                        >
                            {name}
                        </motion.button>
                    ))}
                </div>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                    }}
                >
                    {cities.map(({ name, content }) => {
                        let show = city === name;
                        return (
                            <motion.div
                                key={name}
                                style={tabContent}
                                initial={{
                                    opacity: show ? 1 : 0,
                                }}
                                animate={{
                                    opacity: show ? 1 : 0,
                                    zIndex: show ? 2 : -1,
                                }}
                                transition={{
                                    type: "tween",
                                    ease: "easeInOut",
                                }}
                            >
                                <h3>{name}</h3>
                                <p>{content}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
