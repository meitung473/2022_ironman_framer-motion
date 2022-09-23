import { LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import "./style.css";
const listItems = ["About", "Price", "Contact Us"];

const SingleNavbar = ({ haslayout }) => {
    const [section, setSection] = useState(listItems[0]);
    return (
        <ul className="navbar">
            {listItems.map((item, i) => (
                <li
                    key={item}
                    className="navbar-item"
                    onClick={(e) => setSection(item)}
                >
                    {item}
                    {haslayout ? (
                        <>
                            {item === section && (
                                <motion.span
                                    className="indicator"
                                    layoutId="indicator"
                                />
                            )}
                        </>
                    ) : (
                        <>
                            {item === section && (
                                <motion.span className="indicator" />
                            )}
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default function Navbar() {
    return (
        <div>
            <h3>有無 layoutId 的差別</h3>
            <div>
                <h4>沒 layoutId</h4>
                <SingleNavbar />
                <h4>有 layoutId</h4>
                <LayoutGroup id="single">
                    <SingleNavbar haslayout />
                </LayoutGroup>
            </div>

            <div>
                <h3>layoutId 衝突</h3>
                <LayoutGroup id="conflict">
                    <SingleNavbar haslayout />
                    <SingleNavbar haslayout />
                </LayoutGroup>
            </div>
        </div>
    );
}
