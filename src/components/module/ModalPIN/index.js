import React, { Fragment } from "react";
import * as IoIcons from "react-icons/io5";
import "./modalPIN.css";

const Modal = ({ modalTitle, modalSubtitle, children, ...props }) => {
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
            <button onClick={props.closeModal} className="btn-pin-confirm">
              Continue
            </button>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
