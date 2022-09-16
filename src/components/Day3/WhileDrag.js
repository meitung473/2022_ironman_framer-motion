import React, { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function WhileDrag() {
    const boxref = useRef(null);
    return (
        <>
            <h3>ref 取得框中範圍</h3>
            <div
                ref={boxref}
                style={{
                    marginLeft: 100,
                    width: 400,
                    height: 200,
                    border: "1px solid black",
                }}
            >
                <motion.span
                    style={{
                        display: "inline-block",
                        cursor: "grab",
                    }}
                    drag={true}
                    transition={{
                        type: "inertia",
                        velocity: 300,
                    }}
                    initial={{
                        fontSize: 60,
                    }}
                    dragConstraints={boxref}
                >
                    🏀
                </motion.span>
            </div>
            <h3>單一方向 toggle</h3>

            <motion.span
                style={{
                    display: "inline-block",
                    cursor: "grab",
                    marginTop: 0,
                    fontSize: 60,
                }}
                drag="x"
                whileDrag={{
                    fontSize: 24,
                }}
                dragConstraints={{ left: 100, right: 300 }}
            >
                ⚽
            </motion.span>
        </>
    );
}
