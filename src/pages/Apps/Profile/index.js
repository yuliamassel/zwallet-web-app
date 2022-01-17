import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import img from "../../../assets/img/blank-profile-picture.png";
import "./profile.css";
import { UserContext } from "../../../context/UserContext";

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const toPersonalInfoPage = () => {
    navigate("/apps/personal-information");
  };
  const toChangePasswordPage = () => {
    navigate("/apps/change-password");
  };
  const toChangePINPage = () => {
    navigate("/apps/change-PIN");
  };
  const logOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");
    navigate("/auth/login");
  };
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="profile-content d-flex flex-column justify-content-center align-items-center">
          <div className="profile-img ">
            <img
              src={img}
              className="user-pic mt-3"
              height="76px"
              alt="Users"
            />
          </div>

          <div className="profile-edit d-flex flex-row justify-content-center align-items-center ">
            <BsIcons.BsPen className="pen-edit text-grey m-0" />
            <p className="text-edit text-grey ms-1 mt-1 mb-0">Edit</p>
          </div>

          <div className="profile-name d-flex flex-column align-items-center">
            <p className="profile-user-name">
              {user.first_name} {user.last_name}
            </p>
            <p className="profile-user-phone">+62 {user.phone}</p>
          </div>

          <div
            onClick={toPersonalInfoPage}
            className="profile-manager d-flex flex-row justify-content-between"
          >
            <p className="profile-manager-option">Personal Information</p>
            <BsIcons.BsArrowRight className="icons-size arrow-nav-manager" />
          </div>
          <div
            onClick={toChangePasswordPage}
            className="profile-manager d-flex flex-row justify-content-between"
          >
            <p className="profile-manager-option">Change Password</p>
            <BsIcons.BsArrowRight className="icons-size arrow-nav-manager" />
          </div>
          <div
            onClick={toChangePINPage}
            className="profile-manager d-flex flex-row justify-content-between"
          >
            <p className="profile-manager-option">Change PIN</p>
            <BsIcons.BsArrowRight className="icons-size arrow-nav-manager" />
          </div>
          <div
            onClick={logOut}
            className="profile-manager d-flex flex-row justify-content-between"
          >
            <p className="profile-manager-option">Log Out</p>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Profile;
