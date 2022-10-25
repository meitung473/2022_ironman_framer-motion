import { motion, AnimatePresence } from "framer-motion";

export default function ToggleButton() {
    return (
        <div>
            <AnimatePresence>
                <motion.span>O</motion.span>
                <span>
                    <motion.span>N</motion.span>
                </span>
                <span>
                    <motion.span>F</motion.span>
                    <motion.span>F</motion.span>
                </span>
            </AnimatePresence>
        </div>
    );
}
