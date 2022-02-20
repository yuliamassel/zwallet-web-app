import React, { Fragment, useContext } from "react";
import * as FiIcons from "react-icons/fi";
import { UserContext } from "../../../context/UserContext";
import "./managephone.css";

const ManagePhone = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="manage-phone-content d-flex flex-column">
          <div className="manage-phone-text">
            <p className="manage-phone-title">Manage Phone Number</p>
            <p className="manage-phone-desc">
              You can only delete the phone number and then <br /> you must add
              another phone number.
            </p>
          </div>

          <div className="primary-phone-card d-flex flex-row justify-content-between align-items-center mt-3">
            <div>
              <p className="primary-phone-card-title ms-1">Phone Number</p>
              <p className="primary-phone-card-desc ms-1">+62 {user.phone}</p>
            </div>
            <FiIcons.FiTrash className="delete-phone icons-size text-grey" />
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default ManagePhone;
