import { motion } from "framer-motion";
import { wordVariants } from "./animate";
import { wrapperAnim } from "../../Page/Destinations/animate";

const MotionText = ({ textType, words }) => {
    const Tag = textType;

    return (
        <Tag
            style={{
                display: "inline-block",
                overflow: "hidden",
            }}
            variants={wrapperAnim}
            exit="exit"
            initial="hidden"
            animate="show"
        >
            {words.split("").map((word, i) => (
                <motion.span
                    key={`${word + "-" + i}`}
                    style={{
                        display: "inline-block",
                    }}
                    variants={wrapperAnim}
                >
                    <motion.span
                        custom={i}
                        variants={wordVariants}
                        style={{
                            display: "inline-block",
                        }}
                    >
                        {word}
                    </motion.span>
                </motion.span>
            ))}
        </Tag>
    );
};

export default MotionText;
