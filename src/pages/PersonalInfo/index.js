import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import "./personalInfo.css";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const toNewPhonePage = () => {
    navigate("/new-phone");
  };
  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useState(() => {
    const user = localStorage.getItem("userId");
    const convertedUser = JSON.parse(user);
    return convertedUser;
  });
  const [personalInfoUser, setPersonalInfoUser] = useState({
    userFirstName: "",
    userLastName: "",
    userPhone: "",
    userEmail: ""
  });
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/details/${userId}`, {
        headers: { auth: "admin" }
      })
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        setPersonalInfoUser({
          userFirstName: `${result.first_name}`,
          userLastName: `${result.last_name}`,
          userPhone: `${result.phone}`,
          userEmail: `${result.email}`
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />

              <section className="content-bar big-screen col-lg-8 animation-pull-out ">
                <section className="personal-info-content d-flex flex-column">
                  <div className="personal-info-text mt-2">
                    <p className="personal-info-title">Personal Information</p>
                    <p className="personal-info-desc">
                      We got your personal information from the sign <br /> up
                      proccess. If you want to make changes on <br /> your
                      information, contact our support.
                    </p>
                  </div>

                  <div className="personal-info-card d-flex flex-column mb-3">
                    <p className="personal-info-card-title ms-1">First Name</p>
                    <p className="personal-info-card-desc ms-1">
                      {personalInfoUser.userFirstName}
                    </p>
                  </div>
                  <div className="personal-info-card d-flex flex-column mb-3">
                    <p className="personal-info-card-title ms-1">Last Name</p>
                    <p className="personal-info-card-desc ms-1">
                      {personalInfoUser.userLastName}
                    </p>
                  </div>
                  <div className="personal-info-card d-flex flex-column mb-3">
                    <p className="personal-info-card-title ms-1">
                      Verified E-mail
                    </p>
                    <p className="personal-info-card-desc ms-1">
                      {personalInfoUser.userEmail}
                    </p>
                  </div>
                  <div className="personal-info-card d-flex flex-row justify-content-between align-items-center mb-3">
                    <div>
                      <p className="personal-info-card-title ms-1">
                        Phone Number
                      </p>
                      <p className="personal-info-card-desc ms-1">
                        +62 {personalInfoUser.userPhone}
                      </p>
                    </div>
                    <p
                      onClick={toNewPhonePage}
                      className="manage-phone text-blue me-2"
                    >
                      Manage
                    </p>
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

export default PersonalInfo;
