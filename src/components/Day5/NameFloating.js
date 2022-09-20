import { motion } from "framer-motion";
import "./style.css";
const boxVariants = {
    show: {
        background: "#fa0",
        transition: {
            when: "afterChildren",
            staggerChildren: 0.2,
        },
    },
};

const wordVariants = {
    show: {
        opacity: 1,
        y: 0,
    },
    hidden: {
        opacity: 0,
        y: 20,
    },
};

let name = "RosaHong";

export default function NameFloating() {
    return (
        <motion.div
            className="wordContainer"
            initial="hidden"
            animate="show"
            variants={boxVariants}
        >
            {name.split("").map((word) => (
                <motion.span
                    key={word}
                    className="nameWord"
                    variants={wordVariants}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
