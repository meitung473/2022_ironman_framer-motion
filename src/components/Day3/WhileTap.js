import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

export default function WhileTap() {
    const [press, setPress] = useState(0);
    return (
        <>
            <span
                style={{
                    fontSize: "32px",
                }}
            >
                {press === -1 && "😑"}
                {press === 0 && "🥺"}
                {press === 1 && "🥰"}
            </span>

            <motion.div
                className="tap"
                whileHover={{
                    scale: [1.1, 1],
                }}
                whileTap={{
                    fontSize: "60px",
                    outline: "5px solid hsla(180, 50%, 50%,.6)",
                }}
                onTap={() => setPress(1)}
                onTapStart={() => setPress(0)}
                onTapCancel={() => setPress(-1)}
            />
        </>
    );
}
