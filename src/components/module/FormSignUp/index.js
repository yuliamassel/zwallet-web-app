import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as BsIcons from "react-icons/bs";
import Input from "../../base/Input";
import Button from "../../base/Button";
// import "../FormLogin/form.css";

const FormSignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = () => {
    setLoading(true);
    axios
      .post("https://zwallet-web-app.herokuapp.com/users/registration", {
        username: form.username,
        email: form.email,
        password: form.password
      })
      .then((res) => {
        setLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        if (err.response.status === 403) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage("We have trouble");
        }
      });
    console.log(form);
  };
  const toLoginPage = () => {
    navigate("/login");
  };
  return (
    <Fragment>
      <section className="row col-xl-4 right-section ">
        <div className="col-md-12 col-xl-12">
          <h2 className="section-right-text d-none d-md-block registration-text">
            Start Accessing Banking Needs <br></br> With All Devices and All
            Platforms With 30.000+ Users.
          </h2>
          <p className="section-right-desc d-none d-md-block registration-desc">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? We cover all of
            that for you!
          </p>
        </div>

        {/* <!-- layout mobile version --> */}
        <div className="col-12 right-section-header d-md-none">
          <h1 className="logo text-blue text-center">Zwallet</h1>
        </div>

        <div className="col-12 right-section-content text-center animation-pull-out">
          <h2 className="login-title d-md-none">Sign Up</h2>
          <p className="login-desc d-md-none">
            Create your account to access Zwallet.
          </p>
          {/* <!-- input form start here--> */}
          <div className="input-form d-flex mt-5 ">
            <BsIcons.BsPerson className="form-icons position-absolute" />
            <Input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username"
              type="text"
              name="username"
              id="uname"
            />
          </div>
          <div className="input-form d-flex mt-5 ">
            <BsIcons.BsEnvelope className="form-icons position-absolute" />
            <Input
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
              type="email"
              name="email"
              id="mail"
            />
          </div>
          <div className="input-form d-flex mt-5">
            <BsIcons.BsLock className="form-icons position-absolute" />
            <Input
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type={passwordVisibility ? "text" : "password"}
              name="password"
              id="pass"
            />
            {passwordVisibility ? (
              <BsIcons.BsEyeSlash
                onClick={handlePasswordVisibility}
                className="form-icons bi-eye-slash position-absolute"
              />
            ) : (
              <BsIcons.BsEye
                onClick={handlePasswordVisibility}
                className="form-icons bi-eye-slash position-absolute"
              />
            )}
          </div>

          {errorMessage ? (
            <p className="text-error mb-0">{errorMessage}</p>
          ) : null}

          <Button
            isLoading={loading}
            onClick={handleClick}
            className="button btn-login mb-1"
            type="submit"
          >
            Sign Up
          </Button>
          {/* <!-- input form end here --> */}

          <p className="create mt-5 ">
            Already have an account? Let's{" "}
            <span className="create-account text-blue" onClick={toLoginPage}>
              Login
            </span>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default FormSignUp;
