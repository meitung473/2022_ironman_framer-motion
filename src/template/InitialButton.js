// import { motion } from "framer-motion";
import React, { useState } from "react";

export default function InitialButton({ children }) {
    const [_, update] = useState(false);

    return (
        <div key={_}>
            <button onClick={() => update((boolean) => !boolean)}>
                初始化
            </button>
            {children}
        </div>
    );
}
