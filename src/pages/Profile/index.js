import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import img from "../../assets/img/blank-profile-picture.png";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate("");
  const logOut = () => {
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
                    <p className="profile-user-name">Robert Chandler</p>
                    <p className="profile-user-phone">+62 813-9387-7946</p>
                  </div>

                  <div className="profile-manager d-flex flex-row justify-content-between">
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
