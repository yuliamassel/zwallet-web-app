import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import img from "../../assets/img/blank-profile-picture.png";
import "./profile.css";

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useState(() => {
    const user = localStorage.getItem("userId");
    const convertedUser = JSON.parse(user);
    return convertedUser;
  });
  const [userHeader, setUserHeader] = useState({
    userFullName: "",
    userPhone: ""
  });
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://zwallet-web-app.herokuapp.com/users/details/${userId}`, {
        headers: { auth: "admin" }
      })
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        setUserHeader({
          userFullName: `${result.first_name} ${result.last_name}`,
          userPhone: `${result.phone}`
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toPersonalInfoPage = () => {
    navigate("/personal-information");
  };
  const logOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />

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
                    <BsIcons.BsPen className="pen-edit text-grey" />
                    <p className="text-edit text-grey ms-1 mt-3">Edit</p>
                  </div>

                  <div className="profile-name d-flex flex-column align-items-center">
                    <p className="profile-user-name">
                      {userHeader.userFullName}
                    </p>
                    <p className="profile-user-phone">{userHeader.userPhone}</p>
                  </div>

                  <div
                    onClick={toPersonalInfoPage}
                    className="profile-manager d-flex flex-row justify-content-between"
                  >
                    <p className="profile-manager-option">
                      Personal Information
                    </p>
                    <BsIcons.BsArrowRight className="icons-size arrow-nav-manager" />
                  </div>
                  <div className="profile-manager d-flex flex-row justify-content-between">
                    <p className="profile-manager-option">Change Password</p>
                    <BsIcons.BsArrowRight className="icons-size arrow-nav-manager" />
                  </div>
                  <div className="profile-manager d-flex flex-row justify-content-between">
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
            </div>
          </main>

          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default Profile;
