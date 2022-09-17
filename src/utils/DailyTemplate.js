import React, { useEffect, useState } from "react";
import Days from "../Days";
import InitialButton from "./InitialButton";

export default function DailyTemplate({ day }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        Days[`Day${day}`].then((module) => {
            setData(module.default);
        });
    }, [day]);

    return (
        <div>
            {data &&
                data.map((animation) => {
                    const { name, component } = animation;
                    if (Array.isArray(component)) {
                        return (
                            <div
                                key={name}
                                className="container"
                                style={{
                                    height: animation ?? "auto",
                                }}
                            >
                                <h3>{name}</h3>
                                <InitialButton>
                                    {component.map((c, i) => {
                                        const AnimationComponent = c;
                                        return <AnimationComponent key={i} />;
                                    })}
                                </InitialButton>
                            </div>
                        );
                    }
                    const AnimationComponent = component;
                    return (
                        <div
                            key={name}
                            className="container"
                            style={{
                                height: animation?.containerHeight ?? "auto",
                            }}
                        >
                            <h3>{name}</h3>
                            <InitialButton>
                                <AnimationComponent />
                            </InitialButton>
                        </div>
                    );
                })}
        </div>
    );
}
