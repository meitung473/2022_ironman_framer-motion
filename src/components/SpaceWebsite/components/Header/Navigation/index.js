import { LayoutGroup } from "framer-motion";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, List, Item, Indicator } from "./style";
import { navVariants, itemsVariants, indicatorVariants } from "./animate";
import useNowNestedPath from "../../../hooks/useNowNestedPath";
import routes from "../../../routes";

import { EMPTYVARIANTS } from "./../../../utils/sharedAnimate";
import MotionLink from "../../AnimationLink";

const links = ["home", ...routes.map((route) => route.path)];

export default function Navigation({ handleToggle }) {
    const paths = useNowNestedPath();
    const navigation = useNavigate();

    return (
        <Nav variants={navVariants} animate="show" initial="hidden" exit="exit">
            <List>
                {links.map((link, i) => {
                    let activePath = null;

                    if (paths[0] === "") {
                        activePath = "home";
                    } else {
                        activePath = paths[0];
                    }
                    return (
                        <Item
                            key={link}
                            variants={itemsVariants}
                            onClick={() => {
                                if (activePath === link) return;
                                handleToggle(false)();
                                navigation(`./${link}`);
                            }}
                        >
                            <LayoutGroup id="headerNavigation">
                                <MotionLink
                                    to={link}
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                    variants={EMPTYVARIANTS}
                                    animate="show"
                                    initial="hidden"
                                    exit="exit"
                                    whileHover="hover"
                                >
                                    <span>
                                        {Math.floor(i / 10)}
                                        {i % 10}
                                    </span>
                                    <span>{link}</span>
                                    {activePath === link && (
                                        <Indicator layoutId="NavigationIndicator" />
                                    )}
                                    {/* hover start */}
                                    <Indicator variants={indicatorVariants} />
                                </MotionLink>
                            </LayoutGroup>
                        </Item>
                    );
                })}
            </List>
        </Nav>
    );
}
