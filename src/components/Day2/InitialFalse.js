import { motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

export default function InitialFalse() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <input
                type="checkbox"
                onChange={() => setToggle((boolean) => !boolean)}
            />
            <motion.div
                key={toggle}
                className="box"
                initial={toggle ?? { x: 0 }}
                animate={{
                    x: 100,
                }}
            >
                Initial{toggle ? "True" : "False"}
            </motion.div>
        </>
    );
}
