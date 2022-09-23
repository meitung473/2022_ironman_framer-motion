import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const timingFunctionVariants = {
    hidden: {
        x: 0,
    },
    show: {
        x: 100,
    },
};

let animName = ["In", "Out", "InOut"];
function addPrefix(animTimingFunctionName) {
    return animName.map((anim) => animTimingFunctionName + anim);
}

const functions = {
    linear: "linear",
    anticipate: "anticipate",
    ease: addPrefix("ease"),
    circ: addPrefix("circ"),
    back: addPrefix("back"),
};

const StringTimingFunction = ({ timingFunctionString, children }) => {
    return (
        <motion.div
            className="transitionBox"
            variants={timingFunctionVariants}
            animate="show"
            initial="hidden"
            transition={{
                type: "tween",
                ease: timingFunctionString,
                duration: 3,
            }}
        >
            {children}
        </motion.div>
    );
};
export default function TransitionDisplay() {
    const [timingFunction, setTimingFunction] = useState("linear");
    const [subFunctions, setSubFunctions] = useState(null);
    const [selectedSubF, setSelectedSubF] = useState(null);
    useEffect(() => {
        if (Array.isArray(functions[timingFunction])) {
            setSubFunctions(functions[timingFunction]);
        } else {
            setSubFunctions(null);
            setSelectedSubF(null);
        }
    }, [timingFunction]);

    return (
        <div>
            <label htmlFor="functions">類型</label>
            <select
                id="functions"
                value={timingFunction}
                onChange={(e) => setTimingFunction(e.target.value)}
            >
                {Object.keys(functions).map((name) => {
                    return (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    );
                })}
            </select>
            {subFunctions && (
                <div>
                    {subFunctions.map((subf) => {
                        return (
                            <div key={subf}>
                                <input
                                    type="radio"
                                    id={subf}
                                    name={timingFunction}
                                    value={subf}
                                    onClick={(e) =>
                                        setSelectedSubF(e.target.id)
                                    }
                                />
                                <label htmlFor={subf}>{subf}</label>
                            </div>
                        );
                    })}
                </div>
            )}
            {selectedSubF ? (
                <StringTimingFunction
                    key={selectedSubF}
                    timingFunctionString={selectedSubF}
                >
                    {selectedSubF}
                </StringTimingFunction>
            ) : (
                <StringTimingFunction
                    key={timingFunction}
                    timingFunctionString={timingFunction}
                >
                    {timingFunction}
                </StringTimingFunction>
            )}
        </div>
    );
}
