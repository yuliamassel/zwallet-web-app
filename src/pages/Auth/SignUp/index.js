import axios from "axios";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }
    return errors;
  };

  const handleRegister = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_ZWALLET_API}/users/register`, {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password
        })
        .then((res) => {
          setLoading(false);
          const result = res.data.data;
          console.log(result);
          const userId = result.id;
          localStorage.setItem("userId", JSON.stringify(userId));
          alert(
            "Registration success! Please check your email to verify account."
          );
          // navigate("/auth/login");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validate(form);
    setFormError(resultValidate);
    handleRegister(resultValidate);
    console.log(form);
  };
  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  const toLoginPage = () => {
    navigate("/auth/login");
  };

  return (
    <Fragment>
      <section className="row col-xl-4 right-section ">
        <div className="col-md-12 col-xl-12 mb-1">
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
          <form onSubmit={handleSubmit}>
            <div className="input-form d-flex mt-1">
              <BsIcons.BsPerson className="form-icons position-absolute" />
              <Input
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                type="text"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="text-error mb-0">{formError.first_name}</div>

            <div className="input-form d-flex margin-input-signup ">
              <BsIcons.BsPerson className="form-icons position-absolute" />
              <Input
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
            <div className="text-error mb-0">{formError.last_name}</div>

            <div className="input-form d-flex margin-input-signup ">
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
            <div className="text-error mb-0">{formError.email}</div>

            <div className="input-form d-flex margin-input-signup">
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
            <div className="text-error mb-0">{formError.password}</div>

            {errorMessage ? (
              <p className="text-error mb-0">{errorMessage}</p>
            ) : null}

            <Button
              isLoading={loading}
              // onClick={handleClick}
              className="button btn-login mb-1"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
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

export default SignUp;
