import React, { Fragment } from "react";
import Button from "../../base/Button";
import "./modalAlert.css";

const ModalAlert = ({ alertIcon, alertTitle, alertDesc, action, ...props }) => {
  return (
    <Fragment>
      <div className="modal-bg">
        <div className="modal-alert-container animation-pull-down">
          <section className="alert">
            <div className="modal-alert-icon">
              <div
                className={
                  action === "Delete"
                    ? "alert-icon-wrapper alert-delete"
                    : "alert-icon-wrapper"
                }
              >
                {alertIcon}
              </div>
            </div>
            <div className="modal-alert-text">
              <p className="modal-alert-title">{alertTitle}</p>
              <p className="modal-alert-description">{alertDesc}</p>
            </div>
          </section>

          <section className="modal-alert-footer">
            <Button
              onClick={props.closeModal}
              className="btn-modal-alert cancel"
            >
              Cancel
            </Button>
            <Button
              onClick={props.handleAction}
              className={
                action === "Delete"
                  ? "btn-modal-alert delete"
                  : "btn-modal-alert native"
              }
            >
              {action}
            </Button>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalAlert;
