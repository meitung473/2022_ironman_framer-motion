import React from "react";
import "./style.css"; // 👉 CSS 引入

// 一般 css 如何操作
export default function NormalAnimation() {
    return (
        <div className="section v">
            {/* 👉 全用 className */}
            <div className="box anim">only className</div>
            {/* 👉 只用到 keyframes 字串 */}
            <div
                className="box"
                style={{
                    animation: "move 1s ease normal forwards",
                }}
            >
                inline style
            </div>
            {/* 👉 把 animate 給分開寫，用 CamelCase*/}
            <div
                className="box"
                style={{
                    animationName: "move",
                    animationDuration: "1s",
                    animationTimingFunction: "normal",
                    animationFillMode: "forwards",
                }}
            >
                分開 animation
            </div>
        </div>
    );
}
