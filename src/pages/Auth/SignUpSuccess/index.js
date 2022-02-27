import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/Button";
import * as BsIcons from "react-icons/bs";

const SignUpSuccess = () => {
  const navigate = useNavigate();
  const toCreatePINPage = () => {
    navigate("/auth/PIN");
  };
  return (
    <Fragment>
      <section className="row col-xl-4 right-section animation-pull-out ">
        <div className="col-md-12 col-xl-12">
          <BsIcons.BsCheckCircleFill className="success-icon d-none d-md-block text-green mt-5" />

          <h2 className="section-right-text d-none d-md-block registration-text">
            Your Account Was Successfully Verified
          </h2>
          <p className="section-right-desc d-none d-md-block registration-desc">
            Your account was successfully verified and now you can continue to
            create PIN to secure your account and access all transaction
            features in Zwallet.
          </p>
        </div>

        {/* <!-- layout mobile version --> */}
        <div className="col-12 right-section-header d-md-none">
          <h1 className="logo text-blue text-center">Zwallet</h1>
        </div>

        <div className="col-12 right-section-content text-center ">
          <BsIcons.BsCheckCircleFill className="success-icon d-md-none text-green mt-5" />
          <h2 className="login-title d-md-none">Verified Success!</h2>
          <p className="login-desc d-md-none mb-5">
            Account successfully verified <br></br> you can create new PIN now.
          </p>

          <Button
            onClick={toCreatePINPage}
            className="button btn-login mb-1 mt-1"
          >
            Create PIN Now
          </Button>
        </div>
      </section>
    </Fragment>
  );
};

export default SignUpSuccess;
