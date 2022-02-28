import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./personalInfo.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../../../redux/actions/apps/getProfile";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.GetProfile);
  const profile = profileData.data;

  useEffect(() => {
    dispatch(GetProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const managePhoneNumber = () => {
    if (profile.phone !== null) {
      navigate("/apps/profile/phone");
    } else {
      navigate("/apps/profile/phone/new");
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
            <p className="personal-info-card-desc ms-1">{profile.first_name}</p>
          </div>
          <div className="personal-info-card d-flex flex-column mb-3">
            <p className="personal-info-card-title ms-1">Last Name</p>
            <p className="personal-info-card-desc ms-1">{profile.last_name}</p>
          </div>
          <div className="personal-info-card d-flex flex-column mb-3">
            {profile.verified === "unverified" ? (
              <p className="personal-info-card-title unverified ms-1">
                Unverified E-mail
              </p>
            ) : (
              <p className="personal-info-card-title ms-1">Verified E-mail</p>
            )}
            <p className="personal-info-card-desc ms-1">{profile.email}</p>
          </div>
          <div className="personal-info-card d-flex flex-row justify-content-between align-items-center mb-3">
            <div>
              <p className="personal-info-card-title ms-1">Phone Number</p>
              <p className="personal-info-card-desc ms-1">
                {profile.phone ? `+62 ${profile.phone}` : "+ Add phone number"}
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
