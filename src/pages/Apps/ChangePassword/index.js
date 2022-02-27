import axios from "axios";
import React, { Fragment, useState } from "react";
import * as BsIcons from "react-icons/bs";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import "./changePass.css";
import { useNavigate } from "react-router-dom";
import ModalSuccess from "../../../components/module/ModalSuccess";

const ChangePassword = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    repeatNewPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const handleModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };
  const handleNavigate = () => {
    setOpenModalSuccess(!openModalSuccess);
    navigate("/apps/profile");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = (form) => {
    const errors = {};
    if (!form.currentPassword) {
      errors.currentPassword = "Password is required";
    }
    if (!form.newPassword) {
      errors.newPassword = "New Password is required";
    } else if (form.newPassword.length <= 6) {
      errors.newPassword = "Password must be more than 6 characters";
    }
    if (!form.repeatNewPassword) {
      errors.repeatNewPassword = "New Password is required";
    } else if (form.repeatNewPassword.length <= 6) {
      errors.repeatNewPassword = "Password must be more than 6 characters";
    }
    return errors;
  };

  const handleChangePassword = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setLoading(true);
      axios
        .put(
          `${process.env.REACT_APP_ZWALLET_API}/users/profile/change-password`,
          {
            currentPassword: form.currentPassword,
            newPassword: form.newPassword,
            repeatNewPassword: form.repeatNewPassword
          },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        .then((res) => {
          setLoading(false);
          const result = res.data.data;
          console.log(result);
          handleModalSuccess();
          // navigate("/apps/profile");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response);
          if (err.response.status === 500) {
            setErrorMessage("We have trouble");
          } else {
            setErrorMessage(err.response.data.message);
          }
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validate(form);
    setFormError(resultValidate);
    handleChangePassword(resultValidate);
    console.log(form);
  };

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="change-password-content d-flex flex-column">
          <div className="change-pass-text">
            <p className="change-pass-title">Change Password</p>
            <p className="change-pass-desc">
              You must enter your current password and then <br /> type your new
              password twice.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-change-pass d-flex flex-column justify-content-center align-items-center">
              <div className="input-form pass d-flex mt-5">
                <BsIcons.BsLock className="form-icons position-absolute" />
                <Input
                  name="currentPassword"
                  value={form.currentPassword}
                  onChange={handleChange}
                  className="input-change-pass"
                  placeholder="Current password"
                  type={showPassword ? "text" : "password"}
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
              <p className="text-error mb-0">{formError.currentPassword}</p>
              {/* {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : (
              )} */}

              <div className="input-form pass d-flex mt-4">
                <BsIcons.BsLock className="form-icons position-absolute" />
                <Input
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="input-change-pass"
                  placeholder="New password"
                  type={showPassword ? "text" : "password"}
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
              <p className="text-error error-validation mb-0">
                {formError.newPassword}
              </p>
              {/* {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : (
              )} */}

              <div className="input-form pass d-flex mt-4">
                <BsIcons.BsLock className="form-icons position-absolute" />
                <Input
                  name="repeatNewPassword"
                  value={form.repeatNewPassword}
                  onChange={handleChange}
                  className="input-change-pass"
                  placeholder="Repeat new password"
                  type={showPassword ? "text" : "password"}
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
              <p className="text-error mb-0">{formError.repeatNewPassword}</p>
              {/* {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : (
              )} */}

              {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : null}

              <div className="btn-change-pass d-flex align-items-center mt-0">
                <Button
                  isLoading={loading}
                  className="button btn-login btn-pass"
                >
                  Change Password
                </Button>
              </div>
            </div>
          </form>
        </section>

        {openModalSuccess ? (
          <ModalSuccess
            successTitle="Change Password Success!"
            successDesc="Since your password has been changed, make sure to remember the new one!"
            action="Go bak to Profile"
            closeModal={handleNavigate}
          />
        ) : null}
      </section>
    </Fragment>
  );
};

export default ChangePassword;
