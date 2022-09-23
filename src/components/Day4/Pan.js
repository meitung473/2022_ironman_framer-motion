import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function Pan() {
    const [theme, setTheme] = useState(true);
    const [posX, setPosX] = useState(0);

    return (
        <div
            style={{
                border: "1px solid black",
            }}
        >
            <h3>主題變換 : 有一點點小瑕疵，修正請至 #06 </h3>
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
                    onPan={(e, info) => {
                        if (info.offset.x < 0) {
                            setTheme(true);
                        }
                        if (info.offset.x > 0) {
                            setTheme(false);
                        }
                        console.log(e.pageX);
                        console.log(info.point.x);
                    }}
                />
            </motion.div>
            <h3>Pan 的極限與完整 Pan 事件</h3>
            <motion.div
                style={{
                    height: 100,
                    width: 100,
                    background: "red",
                }}
                animate={{
                    x: posX,
                }}
                onPan={(e, info) => {
                    setPosX(info.offset.x);
                }}
                // onPanEnd={(e, info) => {
                //     if (info.offset.x > 20) {
                //         console.log("like");
                //     }
                //     if (info.offset.x < -20) {
                //         console.log("unlike");
                //     }
                // }}
            />

            {/* <motion.div
                style={{
                    overflowY: "scroll",
                    height: 300,
                    width: 300,
                    border: "1px solid black",
                }}
            >
                <motion.div
                    style={{
                        width: 100,
                        height: 100,
                        background: "#fa0",
                    }}
                    onPanStart={(e, info) => {}}
                    onPanEnd={(e, info) => {}}
                    onPan={(e, info) => {
                        setPos({ x: info.offset.x, y: info.offset.y });
                    }}
                    animate={{
                        x: pos.x,
                        y: pos.y,
                    }}
                ></motion.div>
            </motion.div> */}
            <motion.div
                style={{
                    overflowY: "scroll",
                    height: 300,
                    width: 300,
                    border: "1px solid black",
                }}
            >
                <motion.div
                    style={{
                        width: 100,
                        height: 100,
                        background: "#fa0",
                    }}
                    drag
                    // onDrag={(e, info) => {
                    //     setPos2({ x: info.offset.x, y: info.offset.y });
                    // }}
                    // animate={{
                    //     x: pos2.x,
                    //     y: pos2.y,
                    // }}
                ></motion.div>
            </motion.div>
        </div>
    );
}
