import React, { useState } from "react";
import "./style.css";

export default function ComponentFadeOut() {
    const [hidding, setHidding] = useState(false);
    const [hidden, setHidden] = useState(false);

    return (
        <>
            <h3>沒有 motion Component</h3>
            {!hidden && (
                <div
                    className="outsider"
                    data-hidding={hidding}
                    onClick={() => {
                        setHidding(true);
                        setTimeout(() => {
                            setHidden(true);
                        }, 1500);
                    }}
                >
                    邊緣人
                </div>
            )}
        </>
    );
}
