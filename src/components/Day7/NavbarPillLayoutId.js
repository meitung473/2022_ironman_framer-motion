import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./style.css";

const variants = {
    hidden: {
        width: "40px",
        height: "40px",
    },
    stretch: {
        width: "100px",
        height: "100px",
        borderRadius: "50px",
        transition: {
            delay: 0.5,
        },
    },
};

let baseUrl = "https://reqres.in/api/users";

export default function NavbarPillLayoutId() {
    const [selected, setSelected] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(baseUrl).then((res) => res.json());
            setData(response);
            setSelected(response.data[0].id);
        })();
    }, []);

    return (
        <div className="grid">
            {data &&
                data.data.map((d, i) => (
                    <div className="grid-item" key={d.id}>
                        <img
                            className="grid-img"
                            src={d.avatar}
                            alt={d["first_name"]}
                            onClick={() => setSelected(d.id)}
                        />
                        {selected === d.id && (
                            <motion.div
                                layout
                                className="gird-selected"
                                layoutId="gridindicator"
                            />
                        )}
                    </div>
                ))}
        </div>
    );
}
