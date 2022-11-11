import ReactDOM from "react-dom";
import { ModalBox, Overlay } from "./style";

export default function OverlayComponent(props) {
    const { children, overlay } = props;

    return ReactDOM.createPortal(
        props?.outlet ? (
            <>{children}</>
        ) : (
            <ModalBox>
                {overlay && <Overlay />}
                {children}
            </ModalBox>
        ),
        props?.parent ?? document.getElementById("modal-root")
    );
}
