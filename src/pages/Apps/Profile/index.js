import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import img from "../../../assets/img/blank-profile-picture.png";
import "./profile.css";
import { UserContext } from "../../../context/UserContext";
import ModalAlert from "../../../components/module/ModalAlert";
import ModalPIN from "../../../components/module/ModalPIN";
import "../../../components/module/ModalPIN/modalPIN.css";
import Input from "../../../components/base/Input";

const Profile = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [pin, setPin] = useState(new Array(6).fill(""));
  const PIN = pin.join("");
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);
    // focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/users/PIN`,
        { PIN: PIN },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setLoading(false);
        const result = res.data.message;
        console.log(result);
        navigate("/apps/password/change");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
      });
  };

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
  const toChangePINPage = () => {
    if (user.PIN !== null) {
      navigate("/apps/PIN/change");
    } else {
      navigate("/apps/PIN/new");
    }
  };
  const [openModalAlert, setOpenModalAlert] = useState(false);
  const [openModalPIN, setOpenModalPIN] = useState(false);
  const handleModalAlert = () => {
    setOpenModalAlert(!openModalAlert);
  };
  const logOut = () => {
    localStorage.clear();
    navigate("/auth/login");
  };
  const handleModalPIN = () => {
    setOpenModalPIN(!openModalPIN);
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
            onClick={handleModalPIN}
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

        {openModalPIN ? (
          <ModalPIN
            modalTitle="Enter PIN to Change Password"
            modalSubtitle="Enter your 6 Digits PIN to confirm your account. We make sure you're the one who make the changes."
            closeModal={handleModalPIN}
            handleAction={handleSubmit}
            isLoading={loading}
          >
            <form onSubmit={handleSubmit}>
              <div className="pin-confirm-wrapper">
                {pin.map((pins, index) => (
                  <Input
                    name="pin"
                    value={pins}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="pin-confirm-input"
                    type="text"
                    maxLength="1"
                    key={index}
                  />
                ))}
              </div>
              {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : null}
            </form>
          </ModalPIN>
        ) : null}
      </section>
    </Fragment>
  );
};

export default Profile;
