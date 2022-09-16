import "../../style.css";
import InitialButton from "../../utils/InitialButton";
import HoverStartNEnd from "./HoverStartNEnd";
import WhileFocus from "./WhileFocus";
import WhileHover from "./WhileHover";
import WhileTap from "./WhileTap";
import Tab2Content from "./TabExample/Tab2Content";

const animations = [
    {
        name: "whileHover: touch my heart",
        component: WhileHover,
        containerHeight: "180px",
    },
    {
        name: "whileHover : onHoverStart & onHoverEnd",
        component: HoverStartNEnd,
        containerHeight: "450px",
    },
    {
        name: "whileFocus",
        component: WhileFocus,
        containerHeight: "250px",
    },
    {
        name: "whileTap",
        component: WhileTap,
        containerHeight: "250px",
    },
    {
        name: "Tab from W3school",
        component: Tab2Content,
        containerHeight: "400px",
    },
];
export default function Day3() {
    return (
        <div className="Day">
            {animations.map((animation) => {
                const { name, component } = animation;
                if (Array.isArray(component)) {
                    return (
                        <div
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
