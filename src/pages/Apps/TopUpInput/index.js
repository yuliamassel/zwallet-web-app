import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import ModalPIN from "../../../components/module/ModalPIN";
import "../../../components/module/ModalPIN/modalPIN.css";
import "./topupinput.css";
import ModalSuccess from "../../../components/module/ModalSuccess";

// redux
import { useDispatch, useSelector } from "react-redux";
import { TopupInput } from "../../../redux/actions/apps/topupInput";
import { TopupConfirmation } from "../../../redux/actions/apps/topupConfirmation";

const TopUpInput = () => {
  const dispatch = useDispatch();
  const topupInputData = useSelector((state) => state.TopupInput);
  const topupConfirmData = useSelector((state) => state.TopupConfirmation);
  const profileData = useSelector((state) => state.GetProfile);
  const profile = profileData.data;

  const [topupForm, setTopupForm] = useState({ amount_topup: "" });
  const topUpId = JSON.parse(localStorage.getItem("topUpId"));

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessagePIN, setErrorMessagePIN] = useState("");
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const [openModalPIN, setOpenModalPIN] = useState(false);
  const handleModalPIN = () => {
    setOpenModalPIN(!openModalPIN);
  };
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const handleModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };
  const handleNavigate = () => {
    setOpenModalSuccess(!openModalSuccess);
    navigate("/apps");
  };

  // TOP UP AMOUNT INPUT
  const handleChange = (e) => {
    setTopupForm({
      ...topupForm,
      [e.target.name]: e.target.value
    });
  };
  const validate = (topupForm) => {
    const errors = {};
    if (!topupForm.amount_topup) {
      errors.amount_topup = "Please input amount of money!";
    }
    return errors;
  };
  const handleTopUp = (resultValidate) => {
    if (Object.keys(resultValidate).length === 0) {
      dispatch(
        TopupInput({ topUpId, topupForm, handleModalPIN, setErrorMessage })
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validate(topupForm);
    setFormError(resultValidate);
    handleTopUp(resultValidate);
  };

  // TOP UP PIN CONFIRMATION INPUT
  const [pin, setPin] = useState(new Array(6).fill(""));
  const PIN = pin.join("");

  const handleChangePIN = (element, index) => {
    if (isNaN(element.value)) return false;
    setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);
    // focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmitPIN = (e) => {
    e.preventDefault();
    dispatch(
      TopupConfirmation({
        topUpId,
        PIN,
        handleModalPIN,
        handleModalSuccess,
        setErrorMessagePIN
      })
    );
  };

  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <p className="topup-input-text topup-text ms-4 mt-3">Top Up Balance</p>

        <p className="topup-input-desc ms-4">
          Type the amount of money to topup and then press Top Up button. <br />{" "}
          Min. Top Up Rp10,000. <br /> Max. Top Up Rp200,000.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-amount-money topup-form mb-2 ">
            <Input
              name="amount_topup"
              value={topupForm.amount_topup}
              onChange={handleChange}
              className="input-amount text-center bg-transparent"
              placeholder="0.00"
              type="number"
            />
          </div>

          {errorMessage ? (
            <p className="text-error text-error-transfer mb-0">
              {errorMessage}
            </p>
          ) : null}
          <p className="text-error text-error-transfer mb-0">
            {formError.amount_topup}
          </p>

          <p className="text-title-name balance-info text-center mt-4">
            Zwallet Balance: Rp {profile.balance}
          </p>

          <div className="button-topup">
            <Button
              isLoading={topupInputData.loading}
              type="submit"
              className="button btn-login btn-topup text-white p-2"
            >
              Top Up
            </Button>
          </div>
        </form>

        {openModalPIN ? (
          <ModalPIN
            modalTitle="Enter PIN to Top Up"
            modalSubtitle="Enter your 6 Digits PIN for confirmation to continue Top Up. "
            closeModal={handleModalPIN}
            handleAction={handleSubmitPIN}
            isLoading={topupConfirmData.loading}
          >
            <form onSubmit={handleSubmitPIN}>
              <div className="pin-confirm-wrapper">
                {pin.map((pins, index) => (
                  <Input
                    name="pin"
                    value={pins}
                    onChange={(e) => handleChangePIN(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="pin-confirm-input"
                    type="text"
                    maxLength="1"
                    key={index}
                  />
                ))}
              </div>
              {errorMessagePIN ? (
                <p className="text-error mb-0">{errorMessagePIN}</p>
              ) : null}
            </form>
          </ModalPIN>
        ) : null}

        {openModalSuccess ? (
          <ModalSuccess
            successTitle="Top Up Success!"
            successDesc={`Amount Top Up ${topupForm.amount_topup} successfully added to your Balance.`}
            action="Go back to Dashboard"
            closeModal={handleNavigate}
          />
        ) : null}
      </section>
    </Fragment>
  );
};

export default TopUpInput;
