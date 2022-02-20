import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./personalInfo.css";
import { UserContext } from "../../../context/UserContext";

const PersonalInfo = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const managePhoneNumber = () => {
    if (user.phone !== null) {
      navigate("/apps/manage-phone");
    } else {
      navigate("/apps/new-phone");
    }
  };

  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="personal-info-content d-flex flex-column">
          <div className="personal-info-text">
            <p className="personal-info-title">Personal Information</p>
            <p className="personal-info-desc">
              We got your personal information from the sign <br /> up proccess.
              If you want to make changes on <br /> your information, contact
              our support.
            </p>
          </div>

          <div className="personal-info-card d-flex flex-column mb-3">
            <p className="personal-info-card-title ms-1">First Name</p>
            <p className="personal-info-card-desc ms-1">{user.first_name}</p>
          </div>
          <div className="personal-info-card d-flex flex-column mb-3">
            <p className="personal-info-card-title ms-1">Last Name</p>
            <p className="personal-info-card-desc ms-1">{user.last_name}</p>
          </div>
          <div className="personal-info-card d-flex flex-column mb-3">
            <p className="personal-info-card-title ms-1">Verified E-mail</p>
            <p className="personal-info-card-desc ms-1">{user.email}</p>
          </div>
          <div className="personal-info-card d-flex flex-row justify-content-between align-items-center mb-3">
            <div>
              <p className="personal-info-card-title ms-1">Phone Number</p>
              <p className="personal-info-card-desc ms-1">
                {user.phone ? `+62 ${user.phone}` : "+ Add phone number"}
              </p>
            </div>
            <p
              onClick={managePhoneNumber}
              className="manage-phone text-blue me-2"
            >
              Manage
            </p>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default PersonalInfo;
