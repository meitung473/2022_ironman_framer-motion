import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Days from "../Days";
import InitialButton from "./InitialButton";
import "./template.style.css";

const containerVariants = {
    exit: {
        top: ["100%", "0%", "0%"],
        bottom: ["0%", "0%", "100%"],
        transition: {
            type: "tween",
            ease: "backInOut",
            duration: 2,
        },
    },
};
const componentVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,

        transition: {
            type: "tween",
            ease: "easeIn",
            delay: 2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            type: "tween",
            ease: "backInOut",
        },
    },
};

export default function DailyTemplate() {
    const [data, setData] = useState(null);
    let { day } = useParams();
    useEffect(() => {
        Days[`Day${day}`].then((module) => {
            setData(module.default);
        });
    }, [day]);

    return (
        <React.Fragment>
            <motion.div>
                {data &&
                    data.map((animation) => {
                        const { name, component } = animation;
                        let animationComponents;
                        if (Array.isArray(component)) {
                            animationComponents = (
                                <>
                                    {component.map((c, i) => {
                                        const AnimationComponent = c;
                                        return (
                                            <AnimationComponent
                                                key={name + i}
                                            />
                                        );
                                    })}
                                </>
                            );
                        } else {
                            const SingleComponent = component;
                            animationComponents = <SingleComponent />;
                        }

                        return (
                            <motion.div
                                key={name}
                                className="container"
                                style={{
                                    // opacity: 1,
                                    height: animation.containerHeight ?? "auto",
                                }}
                                variants={componentVariants}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                            >
                                <h3>{name}</h3>
                                <InitialButton>
                                    {animationComponents}
                                </InitialButton>
                            </motion.div>
                        );
                    })}
            </motion.div>
            <motion.div
                layout="size"
                className="transitionOverlay"
                variants={containerVariants}
                initial="hidden"
                animate={"exit"}
                exit={"exit"}
            />
        </React.Fragment>
    );
}
