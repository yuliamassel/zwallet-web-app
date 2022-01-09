import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../base/Button";
import Input from "../../base/Input";

const FormCreatePassword = () => {
  const navigate = useNavigate("");
  const toLoginPage = () => {
    navigate("/login");
  };
  return (
    <Fragment>
      <section class="row col-xl-4 right-section ">
        <div class="col-md-12 col-xl-12">
          <h2 class="section-right-text d-none d-md-block registration-text">
            Did You Forgot Your Password? <br></br> Don’t Worry, You Can Reset
            Your <br></br> Password In a Minutes.
          </h2>
          <p class="section-right-desc d-none d-md-block registration-desc">
            Now you can create a new password for your Zwallet account. Type
            your password twice so we can confirm your new passsword.
          </p>
        </div>

        {/* <!-- layout mobile version --> */}
        <div class="col-12 right-section-header d-md-none">
          <h1 class="logo text-blue text-center">Zwallet</h1>
        </div>

        <div class="col-12 right-section-content text-center animation-pull-out">
          <h2 class="login-title d-md-none">Reset Password</h2>
          <p class="login-desc d-md-none">
            Create and confirm your new password so <br></br> you can login to
            Zwallet.
          </p>
          {/* <!-- input form start here--> */}

          <div className="input-form d-flex mt-5">
            <BsIcons.BsLock className="form-icons position-absolute" />
            <Input
              placeholder="Create your new password"
              type="password"
              name="password"
              id="create-pass"
            />
            <BsIcons.BsEyeSlash className="form-icons bi-eye-slash position-absolute" />
          </div>
          <div className="input-form d-flex mt-5">
            <BsIcons.BsLock className="form-icons position-absolute" />
            <Input
              placeholder="Confirm your new password"
              type="password"
              name="password"
              id="confirm-pass"
            />
            <BsIcons.BsEyeSlash className="form-icons bi-eye-slash position-absolute" />
          </div>

          <Button
            onClick={toLoginPage}
            class="button btn-login btn-confirm mb-1"
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

export default FormCreatePassword;
