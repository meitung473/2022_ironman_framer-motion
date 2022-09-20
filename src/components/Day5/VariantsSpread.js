import React from "react";
import { motion } from "framer-motion";
import "./style.css";
const parent = {
    hidden: {},
    show: {},
};

const child = {
    hidden: {
        x: 0,
    },
    show: {
        x: 100,
    },
};
const notchild = {
    hidden: {
        x: 0,
    },
    yoyo: {
        x: 100,
    },
};

export default function VariantsSpread() {
    return (
        <motion.div initial="hidden" animate="show" variants={parent}>
            <motion.div className="customBox" variants={child}>
                hidden: x: 0 | show: x: 100
            </motion.div>
            <motion.div className="customBox" variants={notchild}>
                hidden: x: 0 | yoyo: x: 100
            </motion.div>
        </motion.div>
    );
}
