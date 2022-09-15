import React from "react";
import { motion } from "framer-motion";
import "./style.css";

// framer motion
export default function FramerMotionAnimation() {
    return (
        <motion.div className="box framer" animate={{ x: 100 }}>
            framer motion
        </motion.div>
    );
}
