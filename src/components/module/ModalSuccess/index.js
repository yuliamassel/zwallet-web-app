import React, { Fragment } from "react";
import * as BsIcons from "react-icons/bs";
import "./modalsuccess.css";

const ModalSuccess = ({ successTitle, successDesc, action, ...props }) => {
  return (
    <Fragment>
      <div className="modal-bg ">
        <div className="modal-success-container animation-pull-down">
          <section className="modal-success-content">
            <BsIcons.BsFillCheckCircleFill className="success-modal-icon" />
            <div className="modal-success-text">
              <p className="modal-success-title">{successTitle}</p>
              <p className="modal-success-description">{successDesc}</p>
            </div>
          </section>

          <section className="modal-success-footer">
            <button onClick={props.closeModal} className="btn-modal-success ">
              {action}
            </button>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalSuccess;
