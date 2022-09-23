import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./style.css";

export default function AnimatePresenceComponent() {
    const [hidden, setHidden] = useState(false);

    return (
        <>
            <h3>AnimatePresence</h3>
            <AnimatePresence>
                {!hidden && (
                    <motion.div
                        key="byebye"
                        className="outsider"
                        onClick={(e) => {
                            setHidden(true);
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                    >
                        邊緣人 2 號
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
