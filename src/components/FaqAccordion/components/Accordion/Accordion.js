import { motion, AnimatePresence } from "framer-motion";

import useToggle from "../../../../Hooks/useToggle";
import { Wrapper, Header, Content } from "./Accordion.style";
import { contentVariant, questionVariant } from "./Accordion.animate";
import Arrow from "./Arrow";

export default function Accordion({ question, answer }) {
    const { toggle: open, handleToggle: handleOpen } = useToggle(false);
    return (
        <Wrapper>
            <Header onClick={handleOpen()}>
                <motion.h4
                    custom={open}
                    variants={questionVariant}
                    animate="show"
                    whileHover="hover"
                >
                    {question}
                </motion.h4>
                <Arrow open={open} />
            </Header>
            <AnimatePresence mode="wait">
                {open && (
                    <Content
                        key={answer}
                        layout
                        variants={contentVariant}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                    >
                        {answer}
                    </Content>
                )}
            </AnimatePresence>
        </Wrapper>
    );
}
