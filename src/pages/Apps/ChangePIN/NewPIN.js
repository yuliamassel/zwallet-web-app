import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import ModalSuccess from "../../../components/module/ModalSuccess";
import { UserContext } from "../../../context/UserContext";

// redux
import { useDispatch, useSelector } from "react-redux";
import { NewPin } from "../../../redux/actions/apps/changePIN";

const NewPIN = () => {
  const dispatch = useDispatch();
  const newPinData = useSelector((state) => state.NewPin);

  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  const [pin, setPin] = useState(new Array(6).fill(""));
  const PIN = pin.join("");

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const handleModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };
  const handleNavigate = () => {
    setOpenModalSuccess(!openModalSuccess);
    navigate("/apps/profile");
  };

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
    dispatch(NewPin({ PIN, handleModalSuccess, setErrorMessage }));
  };

  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="change-pin-content d-flex flex-column">
          <div className="change-pin-text">
            <p className="change-pin-title">
              {newPinData.data.PIN ? "Change PIN" : "Create PIN"}
            </p>
            <p className="change-pin-desc">
              Type your new 6 digits security PIN for transactions <br /> in
              Zwallet.
            </p>
          </div>

          {/* <!-- input form start here--> */}

          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="change-pin-container d-flex flex-row justify-content-around align-items-center">
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
                {/* <div className="change-pin-wrapper">
            </div> */}
              </div>

              {errorMessage ? (
                <p className="text-error mb-0">{errorMessage}</p>
              ) : null}

              <div className="btn-change-pin d-flex align-items-center">
                <Button
                  isLoading={newPinData.loading}
                  className="button btn-login btn-pin"
                >
                  {user.PIN ? "Change PIN" : "Create PIN"}
                </Button>
              </div>
            </div>
          </form>
        </section>

        {openModalSuccess ? (
          <ModalSuccess
            successTitle="Create PIN Success!"
            successDesc="Your PIN is important for transactions and for secure your account. Don't let anyone know!"
            action="Go back to Profile"
            closeModal={handleNavigate}
          />
        ) : null}
      </section>
    </Fragment>
  );
};

export default NewPIN;
