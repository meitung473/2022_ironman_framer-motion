import React from "react";
import "./style.css"; // π CSS εΌε₯

// δΈθ¬ css ε¦δ½ζδ½
export default function NormalAnimation() {
    return (
        <div className="section v">
            {/* π ε¨η¨ className */}
            <div className="box anim">only className</div>
            {/* π εͺη¨ε° keyframes ε­δΈ² */}
            <div
                className="box"
                style={{
                    animation: "move 1s ease normal forwards",
                }}
            >
                inline style
            </div>
            {/* π ζ animate η΅¦ειε―«οΌη¨ CamelCase*/}
            <div
                className="box"
                style={{
                    animationName: "move",
                    animationDuration: "1s",
                    animationTimingFunction: "normal",
                    animationFillMode: "forwards",
                }}
            >
                ει animation
            </div>
        </div>
    );
}
