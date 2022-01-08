import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Input from "../../base/Input";
import Button from "../../base/Button";
// import "../FormLogin/form.css";

const FormSignUp = () => {
  const navigate = useNavigate("");
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
              placeholder="Enter your username"
              type="text"
              name="username"
              id="uname"
            />
          </div>
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

          <Button className="button btn-login mb-1" type="submit">
            Sign Up
          </Button>
          {/* <!-- input form end here --> */}

          <p className="create mt-5 ">
            Already have an account? Let's{" "}
            <span class="create-account text-blue" onClick={toLoginPage}>
              Login
            </span>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default FormSignUp;
