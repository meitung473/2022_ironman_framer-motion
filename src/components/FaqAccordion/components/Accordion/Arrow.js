import { motion } from "framer-motion";

export default function Arrow({ open }) {
    return (
        <motion.svg
            width="10"
            height="7"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
                scale: open ? [1.2, 1] : 1,
                rotate: open ? 180 : 0,
            }}
            style={{
                marginLeft: "auto",
            }}
        >
            <path
                d="M1 .799l4 4 4-4"
                stroke="#F47B56"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
            />
        </motion.svg>
    );
}
