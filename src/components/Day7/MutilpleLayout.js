import React, { useState } from "react";
import "./style.css";
import { LayoutGroup, motion } from "framer-motion";

const noticeVariants = {
    show: {
        y: 0,
        height: 100,
    },
    hidden: {
        y: -10,
    },
};

function Notification() {
    const [close, setClose] = useState(false);
    return (
        <>
            {!close && (
                <motion.div
                    className="noticeBox"
                    variants={noticeVariants}
                    animate="show"
                    // layoutId
                >
                    <h3>title</h3>
                    <p>
                        Sint exercitation eu fugiat quis est. Excepteur quis
                        magna laboris adipisicing mollit qui. Veniam tempor
                        cupidatat adipisicing et eiusmod deserunt.
                    </p>
                    <span onClick={() => setClose(true)}>&times;</span>
                </motion.div>
            )}
        </>
    );
}

export default function MutilpleLayout() {
    return (
        <div>
            <LayoutGroup>
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </LayoutGroup>
        </div>
    );
}
