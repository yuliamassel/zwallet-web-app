import axios from "axios";
import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import "./login.css";
import { UserContext } from "../../../context/UserContext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const validate = (form) => {
    const errors = {};
    if (!form.email) {
      errors.email = "Email is required";
    }
    if (!form.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  const handleLogin = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_ZWALLET_API}/users/login`, {
          email: form.email,
          password: form.password
        })
        .then((res) => {
          setLoading(false);
          const result = res.data.data;
          const token = result.token;
          setUser(result);
          localStorage.setItem("auth", "1");
          localStorage.setItem("token", JSON.stringify(token));
          navigate("/");
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
    }
  };
  const handleClick = () => {
    const resultValidate = validate(form);
    setFormError(resultValidate);
    handleLogin(resultValidate);
    console.log(form);
  };
  const toSignUpPage = () => {
    navigate("/auth/signup");
  };
  const toResetPassPage = () => {
    navigate("/auth/password/confirmation");
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
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your e-mail"
              type="email"
              name="email"
              id="mail"
            />
          </div>
          <p className="text-error  mb-0">{formError.email}</p>

          <div className="input-form d-flex mt-5">
            <BsIcons.BsLock className="form-icons position-absolute" />
            <Input
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              name="password"
              id="pass"
            />
            {showPassword ? (
              <BsIcons.BsEyeSlash
                onClick={handleShowPassword}
                className="form-icons bi-eye-slash position-absolute"
              />
            ) : (
              <BsIcons.BsEye
                onClick={handleShowPassword}
                className="form-icons bi-eye-slash position-absolute"
              />
            )}
          </div>
          <p className="text-error  mb-0">{formError.password}</p>
          {errorMessage ? (
            <p className="text-error mb-0">{errorMessage}</p>
          ) : null}

          <div className="d-flex justify-content-end mt-1">
            <p className="forgot mt-2 me-2" onClick={toResetPassPage}>
              Forgot Password?
            </p>
          </div>

          <Button
            isLoading={loading}
            onClick={handleClick}
            className="button btn-login mb-1"
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

export default Login;
