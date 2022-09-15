import "../../style.css";
import InitialButton from "../../InitialButton";
import FramerMotionAnimation from "./FramerMotionAnimation";
import NormalAnimation from "./NormalAnimation";
import PPTAnimation from "./PPTAnimation";
import SquareAnimation from "./SquareAnimation";
import InitialFalse from "./InitialFalse";
import TransitionTypes from "./TransitionTypes";

const animations = [
    {
        name: "CSS v.s motion",
        component: [NormalAnimation, FramerMotionAnimation],
    },
    {
        name: "keyframes square",
        component: SquareAnimation,
        containerHeight: "300px",
    },
    {
        name: "PPT 陽春動畫",
        component: PPTAnimation,
        containerHeight: "250px",
    },
    {
        name: "initial false",
        component: InitialFalse,
    },
    {
        name: "transition types",
        component: TransitionTypes,
        containerHeight: "300px",
    },
];
export default function Day2() {
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
