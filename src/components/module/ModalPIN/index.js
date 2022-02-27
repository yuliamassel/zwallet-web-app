import React, { Fragment } from "react";
import * as IoIcons from "react-icons/io5";
import Button from "../../base/Button";
import "./modalPIN.css";

const Modal = ({
  modalTitle,
  modalSubtitle,
  children,
  isLoading,
  ...props
}) => {
  return (
    <Fragment>
      <div className="modal-bg ">
        <div className="modal-container animation-pull-down">
          <section className="title-modal-wrapper">
            <div className="title-modal">{modalTitle}</div>
            <div className="title-close-btn">
              <button onClick={props.closeModal}>
                <IoIcons.IoCloseOutline className="close-icon" />
              </button>
            </div>
          </section>

          <section className="subtitle">
            {" "}
            <p>{modalSubtitle}</p>
          </section>
          <section className="body">{children}</section>

          <section className="footer-modal">
            <Button
              onClick={props.handleAction}
              isLoading={isLoading}
              className="btn-pin-confirm"
            >
              Continue
            </Button>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
