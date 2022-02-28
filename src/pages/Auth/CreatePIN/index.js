import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";

// redux
import { useDispatch, useSelector } from "react-redux";
import { AuthCreatePIN } from "../../../redux/actions/auth/authCreatePIN";

const CreatePIN = () => {
  const dispatch = useDispatch();
  const createPINData = useSelector((state) => state.AuthCreatePIN);

  const [pin, setPin] = useState(new Array(6).fill(""));
  const PIN = pin.join("");
  const userId = JSON.parse(localStorage.getItem("userId"));
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);
    // focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId) {
      return setErrorMessage("You have to Sign Up before create PIN!");
    } else {
      dispatch(AuthCreatePIN({ PIN, navigate, setErrorMessage }));
    }
  };

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
          <h2 className="login-title d-md-none">Create PIN</h2>
          <p className="login-desc d-md-none">
            Create 6 digits pin to secure all your money <br></br> and your data
            in Zwallet app.
          </p>

          {/* <!-- input form start here--> */}
          <form onSubmit={handleSubmit}>
            <div className="input-pin-container d-flex flex-row justify-content-between">
              {pin.map((pins, index) => (
                <Input
                  name="pin"
                  value={pins}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  className="pin-input-wrapper"
                  type="text"
                  maxLength="1"
                  key={index}
                />
                // <div  className="pin-input-wrapper">
                // </div>
              ))}
            </div>

            {errorMessage ? (
              <p className="text-error mb-0">{errorMessage}</p>
            ) : null}

            <Button
              isLoading={createPINData.loading}
              className="button btn-login btn-confirm mb-1"
              type="submit"
            >
              Confirm
            </Button>
            {/* <!-- input form end here --> */}
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default CreatePIN;
