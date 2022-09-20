import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Pan() {
    const [theme, setTheme] = useState(true);
    return (
        <>
            <h3>滑動小球 : 有一點點小瑕疵，修正請至 Day6</h3>
            <motion.div
                className="panBox"
                animate={{
                    background: theme ? "#ABD9FF" : "#182747",
                }}
            >
                <motion.span
                    className="panThumb"
                    animate={{
                        background: theme ? "#fa0" : "#182747",
                        x: theme ? 0 : "calc(100px - 40px)",
                        rotate: theme ? 0 : -160,
                        boxShadow: theme
                            ? "inset 0px 0px rgb(0, 0, 0,0)"
                            : "inset 15px 8px #fa0",
                    }}
                    // transition={{
                    //     duration: 1,
                    // }}
                    onPan={(e, info) => {
                        if (info.offset.x < 0) {
                            setTheme(true);
                        }
                        if (info.offset.x > 0) {
                            setTheme(false);
                        }
                    }}
                />
            </motion.div>
        </>
    );
}
