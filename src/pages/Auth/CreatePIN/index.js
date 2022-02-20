import React, { Fragment } from "react";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";

const CreatePIN = () => {
  return (
    <Fragment>
      <section className="row col-xl-4 right-section ">
        <div className="col-md-12 col-xl-12">
          <h2 className="section-right-text d-none d-md-block registration-text">
            Secure Your Account, Your Wallet, <br /> and Your Data With 6 Digits
            PIN <br />
            That You Created Yourself.
          </h2>
          <p className="section-right-desc d-none d-md-block registration-desc">
            Create 6 digits pin to secure all your money and your data in
            Zwallet app. Keep it secret and don’t tell anyone about your Zwallet
            account password and the PIN.
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
          <div className="input-pin-container d-flex flex-row justify-content-between">
            <div className="pin-input-wrapper">
              <Input className="pin-input" type="text" maxLength="1" />
            </div>
            <div className="pin-input-wrapper">
              <Input className="pin-input" type="text" maxLength="1" />
            </div>
            <div className="pin-input-wrapper">
              <Input className="pin-input" type="text" maxLength="1" />
            </div>
            <div className="pin-input-wrapper">
              <Input className="pin-input" type="text" maxLength="1" />
            </div>
            <div className="pin-input-wrapper">
              <Input className="pin-input" type="text" maxLength="1" />
            </div>
            <div className="pin-input-wrapper">
              <Input className="pin-input" type="text" maxLength="1" />
            </div>
          </div>

          <Button className="button btn-login btn-confirm mb-1" type="submit">
            Confirm
          </Button>
          {/* <!-- input form end here --> */}
        </div>
      </section>
    </Fragment>
  );
};

export default CreatePIN;
