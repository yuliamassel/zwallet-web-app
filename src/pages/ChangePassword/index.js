import React, { Fragment, useState } from "react";
import * as BsIcons from "react-icons/bs";
import Input from "../../components/base/Input";
import Button from "../../components/base/Button";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import "./changePass.css";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
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
                <section className="change-password-content d-flex flex-column">
                  <div className="change-pass-text mt-2">
                    <p className="change-pass-title">Change Password</p>
                    <p className="change-pass-desc">
                      You must enter your current password and then <br /> type
                      your new password twice.
                    </p>
                  </div>

                  <div className="form-change-pass d-flex flex-column justify-content-center align-items-center">
                    <div className="input-form pass d-flex mt-5">
                      <BsIcons.BsLock className="form-icons position-absolute" />
                      <Input
                        className="input-change-pass"
                        placeholder="Current password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                      />
                      {showPassword ? (
                        <BsIcons.BsEyeSlash
                          onClick={handleShowPassword}
                          className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                        />
                      ) : (
                        <BsIcons.BsEye
                          onClick={handleShowPassword}
                          className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                        />
                      )}
                    </div>
                    <div className="input-form pass d-flex mt-5">
                      <BsIcons.BsLock className="form-icons position-absolute" />
                      <Input
                        className="input-change-pass"
                        placeholder="New password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                      />
                      {showPassword ? (
                        <BsIcons.BsEyeSlash
                          onClick={handleShowPassword}
                          className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                        />
                      ) : (
                        <BsIcons.BsEye
                          onClick={handleShowPassword}
                          className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                        />
                      )}
                    </div>
                    <div className="input-form pass d-flex mt-5">
                      <BsIcons.BsLock className="form-icons position-absolute" />
                      <Input
                        className="input-change-pass"
                        placeholder="Repeat new password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                      />
                      {showPassword ? (
                        <BsIcons.BsEyeSlash
                          onClick={handleShowPassword}
                          className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                        />
                      ) : (
                        <BsIcons.BsEye
                          onClick={handleShowPassword}
                          className="form-icons eye-icon-pass bi-eye-slash position-absolute"
                        />
                      )}
                    </div>

                    <div className="btn-change-pass d-flex align-items-center mt-0">
                      <Button className="button btn-login btn-pass">
                        Change Password
                      </Button>
                    </div>
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

export default ChangePassword;
