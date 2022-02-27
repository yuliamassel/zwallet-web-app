import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import img from "../../../assets/img/blank-profile-picture.png";
import "./profile.css";
import { UserContext } from "../../../context/UserContext";
import ModalAlert from "../../../components/module/ModalAlert";
import axios from "axios";

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data;
        setUser(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addProfilePicture = () => {
    navigate("/apps/profile/picture");
  };
  const toPersonalInfoPage = () => {
    navigate("/apps/profile/information");
  };
  const toChangePasswordPage = () => {
    navigate("/apps/password/change");
  };
  const toChangePINPage = () => {
    if (user.PIN !== null) {
      navigate("/apps/PIN/change");
    } else {
      navigate("/apps/PIN/new");
    }
  };
  const [openModalAlert, setOpenModalAlert] = useState(false);
  const handleModalAlert = () => {
    setOpenModalAlert(!openModalAlert);
  };
  const logOut = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="profile-content d-flex flex-column justify-content-center align-items-center">
          <div className="profile-img ">
            <img
              src={user.picture ? user.picture : img}
              className="user-pic mt-3"
              height="76px"
              alt="Users"
            />
          </div>

          <div
            onClick={addProfilePicture}
            className="profile-edit d-flex flex-row justify-content-center align-items-center "
          >
            <BsIcons.BsPen className="pen-edit text-grey m-0" />
            <p className="text-edit text-grey ms-1 mt-1 mb-0">Edit</p>
          </div>

          <div className="profile-name d-flex flex-column align-items-center">
            <p className="profile-user-name">
              {user.first_name} {user.last_name}
            </p>
            <p className="profile-user-phone">
              {user.phone ? `+62 ${user.phone}` : "+ Add phone number"}
            </p>
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
            <p className="profile-manager-option">
              {user.PIN ? "Change PIN" : "Create PIN"}
            </p>
            <BsIcons.BsArrowRight className="icons-size arrow-nav-manager" />
          </div>
          <div
            onClick={handleModalAlert}
            className="profile-manager d-flex flex-row justify-content-between"
          >
            <p className="profile-manager-option">Log Out</p>
          </div>
        </section>

        {openModalAlert ? (
          <ModalAlert
            alertIcon={<AiIcons.AiOutlineLogout />}
            alertTitle="Log Out Account?"
            alertDesc="Are you sure you want to log out from Zwallet? Save all your changes before logout."
            action="Log Out"
            closeModal={handleModalAlert}
            handleAction={logOut}
          />
        ) : null}
      </section>
    </Fragment>
  );
};

export default Profile;
