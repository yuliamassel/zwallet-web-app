import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";

const ResetPassCreate = () => {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(passwordVisibility ? false : true);
  };
  const toLoginPage = () => {
    navigate("/auth/login");
  };
  return (
    <Fragment>
      <section className="row col-xl-4 right-section ">
        <div className="col-md-12 col-xl-12">
          <h2 className="section-right-text d-none d-md-block registration-text">
            Did You Forgot Your Password? <br></br> Don’t Worry, You Can Reset
            Your <br></br> Password In a Minutes.
          </h2>
          <p className="section-right-desc d-none d-md-block registration-desc">
            Now you can create a new password for your Zwallet account. Type
            your password twice so we can confirm your new passsword.
          </p>
        </div>

        {/* <!-- layout mobile version --> */}
        <div className="col-12 right-section-header d-md-none">
          <h1 className="logo text-blue text-center">Zwallet</h1>
        </div>

        <div className="col-12 right-section-content text-center animation-pull-out">
          <h2 className="login-title d-md-none">Reset Password</h2>
          <p className="login-desc d-md-none">
            Create and confirm your new password so <br></br> you can login to
            Zwallet.
          </p>
          {/* <!-- input form start here--> */}

          <div className="input-form d-flex mt-5">
            <BsIcons.BsLock className="form-icons position-absolute" />
            <Input
              placeholder="Create your new password"
              type={passwordVisibility ? "text" : "password"}
              name="password"
              id="create-pass"
            />
            <BsIcons.BsEyeSlash
              onClick={handlePasswordVisibility}
              className="form-icons bi-eye-slash position-absolute"
            />
          </div>
          <div className="input-form d-flex mt-5">
            <BsIcons.BsLock className="form-icons position-absolute" />
            <Input
              placeholder="Confirm your new password"
              type={passwordVisibility ? "text" : "password"}
              name="password"
              id="confirm-pass"
            />
            <BsIcons.BsEyeSlash
              onClick={handlePasswordVisibility}
              className="form-icons bi-eye-slash position-absolute"
            />
          </div>

          <Button
            onClick={toLoginPage}
            className="button btn-login btn-confirm mb-1"
            type="submit"
          >
            Reset Password
          </Button>
          {/* <!-- input form end here --> */}
        </div>
      </section>
    </Fragment>
  );
};

export default ResetPassCreate;
