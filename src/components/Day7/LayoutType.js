import { motion } from "framer-motion";
import React, { useState } from "react";
const variants = {
    hidden: {},
    show: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },
};

export default function LayoutType() {
    return (
        <motion.div
            layout="position"
            style={{
                width: 200,
                height: 200,
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}
        >
            <motion.div
                layout
                style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "black",
                }}
                animate="show"
                variants={variants}
            ></motion.div>
        </motion.div>
    );
}
