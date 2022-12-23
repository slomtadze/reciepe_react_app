import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-20 bg-black/50"></div>
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="fixed z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-3/4 w-3/4">
      {children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
