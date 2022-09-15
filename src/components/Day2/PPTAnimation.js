import { motion } from "framer-motion";
import "./style.css";

const direction = [
    {
        name: "左飛入",
        initial: {
            x: "-100%",
        },
        animate: {
            x: "0%",
        },
    },
    {
        name: "右飛入",
        initial: {
            x: "100%",
        },
        animate: {
            x: "0%",
        },
    },
    {
        name: "上飛入",
        initial: {
            y: "100%",
        },
        animate: {
            y: "0%",
        },
    },
    {
        name: "下飛入",
        initial: {
            y: "-100%",
        },
        animate: {
            y: "0%",
        },
    },
];
export default function PPTAnimation() {
    return (
        <div className="section">
            {direction.map(({ name, initial, animate }) => (
                <div
                    key={name}
                    style={{
                        marginLeft: "50px",
                    }}
                >
                    <h3>{name}</h3>
                    <motion.div
                        className="box"
                        initial={{ ...initial, opacity: 0 }}
                        animate={{ ...animate, opacity: 1 }}
                    />
                </div>
            ))}
        </div>
    );
}
