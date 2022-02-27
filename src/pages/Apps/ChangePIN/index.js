import axios from "axios";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import "./changePin.css";

const ChangePIN = () => {
  const [pin, setPin] = useState(new Array(6).fill(""));
  const PIN = pin.join("");
  const token = JSON.parse(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_ZWALLET_API}/users/PIN`,
        { PIN: PIN },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setLoading(false);
        const result = res.data.message;
        console.log(result);
        navigate("/apps/PIN/new");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 500) {
          setErrorMessage("We have trouble");
        } else {
          setErrorMessage(err.response.data.message);
        }
      });
  };

  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="change-pin-content d-flex flex-column">
          <div className="change-pin-text">
            <p className="change-pin-title">Change PIN</p>
            <p className="change-pin-desc">
              Enter your current 6 digits Zwallet PIN below to <br /> continue
              to the next steps.
            </p>
          </div>

          {/* <!-- input form start here--> */}
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="change-pin-container d-flex flex-row justify-content-around align-items-center">
                {/* <div className="change-pin-wrapper">
            </div> */}
                {pin.map((pins, index) => (
                  <Input
                    name="pin"
                    value={pins}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="change-pin-wrapper"
                    type="text"
                    maxLength="1"
                    key={index}
                  />
                ))}
              </div>

              {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : null}
            </div>

            <div className="btn-change-pin d-flex align-items-center">
              <Button isLoading={loading} className="button btn-login btn-pin">
                Continue
              </Button>
            </div>
          </form>
        </section>
      </section>
    </Fragment>
  );
};

export default ChangePIN;
