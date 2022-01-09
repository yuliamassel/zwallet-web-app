import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import "./form.css";
import Input from "../../base/Input";
import Button from "../../base/Button";

const FormLogin = () => {
  const navigate = useNavigate("");
  const toSignUpPage = () => {
    navigate("/signup");
  };
  const toResetPassPage = () => {
    navigate("/reset-password");
  };
  const handleClick = () => {
    navigate("/");
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
          <h2 className="login-title d-md-none">Login</h2>
          <p className="login-desc d-md-none">
            Login to your existing account to access <br></br> all the features
            in Zwallet.
          </p>
          {/* <!-- input form start here--> */}
          <div className="input-form d-flex mt-5 ">
            <BsIcons.BsEnvelope className="form-icons position-absolute" />
            <Input
              placeholder="Enter your e-mail"
              type="email"
              name="email"
              id="mail"
            />
          </div>
          <div className="input-form d-flex mt-5">
            <BsIcons.BsLock className="form-icons position-absolute" />
            <Input
              placeholder="Enter your password"
              type="password"
              name="password"
              id="pass"
            />
            <BsIcons.BsEyeSlash className="form-icons bi-eye-slash position-absolute" />
          </div>

          <div className="d-flex justify-content-end mt-1">
            <p className="forgot mt-2 me-2" onClick={toResetPassPage}>
              Forgot Password?
            </p>
          </div>

          <Button
            onClick={handleClick}
            className="button btn-login mb-1"
            type="submit"
          >
            Login
          </Button>
          {/* <!-- input form end here --> */}

          <p className="create mt-5 ">
            Don't have an account? Let's{" "}
            <span className="create-account text-blue" onClick={toSignUpPage}>
              {" "}
              Sign Up
            </span>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default FormLogin;
