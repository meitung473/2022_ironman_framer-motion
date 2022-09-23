import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import useToggle from "../../../Hooks/useToggle";
import { modalVariants, modalBoxVariants } from "./animate";
import "./Modal.style.css";

const ModalBox = ({ handleOpen }) => {
    return ReactDOM.createPortal(
        <div className="modal-Box">
            <motion.div
                className="overlay"
                onClick={handleOpen(false)}
                variants={modalVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
            />
            <motion.div
                className="modal-content"
                variants={modalBoxVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <div className="modal-header">
                    <motion.span
                        className="close"
                        onClick={handleOpen(false)}
                        whileHover={{
                            color: "red",
                            cursor: "pointer",
                        }}
                    >
                        &times;
                    </motion.span>
                    <h2>Modal Header</h2>
                </div>
                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                <div className="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </motion.div>
        </div>,
        document.getElementById("modal-root")
    );
};

function Modal() {
    const { toggle: open, handleToggle: handleOpen } = useToggle(false);
    return (
        <>
            <button id="myBtn" onClick={handleOpen()}>
                Open Modal
            </button>
            <AnimatePresence initial={false}>
                {open && <ModalBox handleOpen={handleOpen} />}
            </AnimatePresence>
        </>
    );
}
export default Modal;
