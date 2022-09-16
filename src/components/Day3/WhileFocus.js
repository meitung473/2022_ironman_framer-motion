import React from "react";
import { motion } from "framer-motion";
import "./style.css";

function defaultPop(e) {
    e.preventDefault();
}

export default function WhileFocus() {
    return (
        <>
            <h3>
                用
                <kbd
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        backgroundColor: "#666",
                        color: "#fff",
                    }}
                >
                    Tab
                </kbd>
                鍵嘗試看看
            </h3>
            <motion.a
                href="#"
                className="link"
                whileFocus={{
                    scale: 0.9,
                    backgroundColor: "#000",
                    color: "#fff",
                }}
                onClick={defaultPop}
            >
                1
            </motion.a>
            <motion.a
                href="#"
                className="link"
                onClick={defaultPop}
                whileFocus={{
                    scale: 0.9,
                    backgroundColor: "#000",
                    color: "#fff",
                }}
            >
                2
            </motion.a>
            <motion.a
                href="#"
                className="link"
                onClick={defaultPop}
                whileFocus={{
                    scale: 0.9,
                    backgroundColor: "#000",
                    color: "#fff",
                }}
            >
                3
            </motion.a>
            <h3>input focus</h3>
            <p>
                <label>點擊文字框</label>
                <motion.input
                    type="text"
                    whileFocus={{
                        color: "#fff",
                        backgroundImage:
                            "linear-gradient(180deg,#aaa -200%, #000 200%)",
                    }}
                    transition={{
                        duration: 1,
                        repeatType: "mirror",
                        type: "tween",
                    }}
                />
            </p>
        </>
    );
}
