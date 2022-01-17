import React, { Fragment } from "react";
import * as FiIcons from "react-icons/fi";

import "./managephone.css";

const ManagePhone = () => {
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="manage-phone-content d-flex flex-column">
          <div className="manage-phone-text mt-2">
            <p className="manage-phone-title">Manage Phone Number</p>
            <p className="manage-phone-desc">
              You can only delete the phone number and then <br /> you must add
              another phone number.
            </p>
          </div>

          <div className="primary-phone-card d-flex flex-row justify-content-between align-items-center mt-3">
            <div>
              <p className="primary-phone-card-title ms-1">Phone Number</p>
              <p className="primary-phone-card-desc ms-1">+62 8898898899</p>
            </div>
            <FiIcons.FiTrash className="delete-phone icons-size text-grey" />
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default ManagePhone;
