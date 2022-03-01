import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import * as BsIcons from "react-icons/bs";
import "./topup.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { TopupMethod } from "../../../redux/actions/apps/topupMethod";

const TopUp = () => {
  const dispatch = useDispatch();
  const topupMethodData = useSelector((state) => state.TopupMethod);

  const [topUpMethod, setTopUpMethod] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTopUpMethod(e.target.value);
  };
  const handleClick = () => {
    dispatch(TopupMethod({ topUpMethod, navigate }));
  };

  return (
    <Fragment>
      <section className="topup-method-container content-bar big-screen col-lg-8 animation-pull-out ">
        <p className="topup-text ms-4 mt-3">Top Up Method</p>

        <p className="topup-input-desc ms-4">
          Choose topup method below and then press Continue button. <br /> Due
          to several reasons we recommend you to choose <br />{" "}
          <strong> Instant Top Up/Cash </strong> method.
        </p>

        <div className="topup-method-form mt-3 d-flex flex-column flex-wrap d-flex justify-content-center align-items-center">
          <div className="topup-method-wrapper ">
            <label htmlFor="virtual-account" className="topup-method">
              <Input
                value="Virtual Account"
                onChange={handleChange}
                checked={topUpMethod === "Virtual Account"}
                type="radio"
                name="topUpMethod"
                id="virtual-account"
                className="topup__method__input"
              />
              <div className="topup__method__radio"></div>
              <BsIcons.BsBank className="radio-icon mt-0 ms-2 me-2" />
              <span className="radio-label">Virtual Account</span>
            </label>
          </div>

          <div className="topup-method-wrapper ">
            <label htmlFor="debit-card" className="topup-method">
              <Input
                value="Debit Card"
                onChange={handleChange}
                checked={topUpMethod === "Debit Card"}
                type="radio"
                name="topUpMethod"
                id="debit-card"
                className="topup__method__input"
              />
              <div className="topup__method__radio"></div>
              <BsIcons.BsCreditCard className="radio-icon mt-0 ms-2 me-2" />
              <span className="radio-label">Debit Card</span>
            </label>
          </div>

          <div className="topup-method-wrapper ">
            <label htmlFor="cash" className="topup-method">
              <Input
                value="Instant Top Up / Cash"
                onChange={handleChange}
                checked={topUpMethod === "Instant Top Up / Cash"}
                type="radio"
                name="topUpMethod"
                id="cash"
                className="topup__method__input"
              />
              <div className="topup__method__radio"></div>
              <BsIcons.BsCashStack className="radio-icon mt-0 ms-2 me-2" />
              <span className="radio-label">Instant Top Up / Cash</span>
            </label>
          </div>
        </div>

        <div className="btn-topup-method mt-5 d-flex flex-end">
          <Button
            isLoading={topupMethodData.loading}
            onClick={handleClick}
            className="btn-method-continue"
          >
            Continue
          </Button>
        </div>

        {/* <label className="input-name genders">Gender</label> */}
        {/* <div className="topup-instruction">
          <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
            <span className="number">1</span>
            <p className="topup-instruction-text d-flex align-items-center ps-3">
              Go to the nearest ATM or you can use E-Banking.
            </p>
          </div>
          <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
            <span className="number">2</span>
            <p className="topup-instruction-text d-flex align-items-center ps-3">
              Type your security number on the ATM or E-Banking.
            </p>
          </div>
          <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
            <span className="number">3</span>
            <p className="topup-instruction-text d-flex align-items-center ps-3">
              Select “Transfer” in the menu
            </p>
          </div>
          <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
            <span className="number">4</span>
            <p className="topup-instruction-text d-flex align-items-center ps-3">
              Type the virtual account number that we provide you at the top.
            </p>
          </div>
          <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
            <span className="number">5</span>
            <p className="topup-instruction-text d-flex align-items-center ps-3">
              Type the amount of the money you want to top up.
            </p>
          </div>
          <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
            <span className="number">6</span>
            <p className="topup-instruction-text d-flex align-items-center ps-3">
              Read the summary details
            </p>
          </div>
          <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
            <span className="number">7</span>
            <p className="topup-instruction-text d-flex align-items-center ps-3">
              Press transfer / top up
            </p>
          </div>
          <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
            <span className="number">8</span>
            <p className="topup-instruction-text d-flex align-items-center ps-3">
              You can see your money in Zwallet within 3 hours.
            </p>
          </div>
        </div> */}
      </section>
    </Fragment>
  );
};

export default TopUp;
