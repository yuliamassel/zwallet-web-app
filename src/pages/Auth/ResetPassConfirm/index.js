import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";

const ResetPassConfirm = () => {
  const navigate = useNavigate();
  const toCreatePassPage = () => {
    navigate("/auth/password/new");
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
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
        </div>

        {/* <!-- layout mobile version --> */}
        <div className="col-12 right-section-header d-md-none">
          <h1 className="logo text-blue text-center">Zwallet</h1>
        </div>

        <div className="col-12 right-section-content text-center animation-pull-out">
          <h2 className="login-title d-md-none">Reset Password</h2>
          <p className="login-desc d-md-none">
            Enter your Zwallet e-mail so we can send <br></br> you a password
            reset link.
          </p>
          {/* <!-- input form start here--> */}

          <div className="input-form confirm-email d-flex mt-5 ">
            <BsIcons.BsEnvelope className="form-icons position-absolute" />
            <Input
              placeholder="Enter your e-mail"
              type="email"
              name="email"
              id="mail"
            />
          </div>

          <Button
            onClick={toCreatePassPage}
            className="button btn-login btn-confirm mb-1"
            type="submit"
          >
            Confirm
          </Button>
          {/* <!-- input form end here --> */}
        </div>
      </section>
    </Fragment>
  );
};

export default ResetPassConfirm;
