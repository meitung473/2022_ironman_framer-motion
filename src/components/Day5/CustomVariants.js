import { motion } from "framer-motion";
import "./style.css";
const boxVariants = {
    hidden: {
        x: 0,
    },
    show: (index) => ({
        x: (index + 1) * 100,
        background: `rgba(0,0,0,${(index + 1) / 10})`,
        transition: {
            delay: index,
        },
    }),
};

export default function CustomVariants() {
    return (
        <>
            {Array.from({ length: 5 }, (_, i) => (
                <motion.div
                    className="customBox"
                    initial="hidden"
                    animate="show"
                    custom={i}
                    variants={boxVariants}
                />
            ))}
        </>
    );
}
