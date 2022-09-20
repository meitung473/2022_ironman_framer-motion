import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

export default function FixCSSBug() {
    const [theme, setTheme] = useState(true);

    return (
        <>
            <h3>修正後的滑動小球</h3>
            <motion.div
                className="panBox"
                data-theme={theme}
                layout
                animate={{
                    background: theme ? "#ABD9FF" : "#182747",
                }}
            >
                <motion.span
                    className="panThumb"
                    layout
                    style={{
                        /* 還我漂漂拳 */
                        boxShadow: theme
                            ? "inset 15px 8px rgba(255, 170, 0,0)"
                            : "inset 15px 8px rgba(255, 170, 0,1)",
                    }}
                    animate={{
                        background: theme ? "#fa0" : "#182747",
                        rotate: theme ? 0 : -160,
                        /* 變成動畫值 */
                        // boxShadow: theme
                        //     ? "inset 15px 8px rgba(255, 170, 0,0)"
                        //     : "inset 15px 8px rgba(255, 170, 0,1)",
                    }}
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
