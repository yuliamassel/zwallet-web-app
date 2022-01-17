import React, { Fragment, useContext, useState } from "react";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import "./topupinput.css";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TopUpInput = () => {
  const [topupForm, setTopupForm] = useState({ topup: "" });
  const id = JSON.parse(localStorage.getItem("userId"));
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTopupForm({
      ...topupForm,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = () => {
    setLoading(true);
    axios
      .put(`${process.env.REACT_APP_ZWALLET_API}/wallet/topup/${id}`, {
        topup: topupForm.topup
      })
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        setUser(result);
        navigate("/apps");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        console.log(err.response.data.message);
      });
  };

  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <p className="topup-input-text topup-text ms-4 mt-3">Top Up Balance</p>

        <p className="topup-input-desc ms-4">
          Type the amount you want to topup and then press Top Up button.
        </p>

        <p className="balance-info ms-4">Your balance: {user.balance}</p>

        <div className="input-amount-money topup-form mb-2 ">
          <Input
            name="topup"
            value={topupForm.topup}
            onChange={handleChange}
            className="input-amount text-center bg-transparent"
            placeholder="0.00"
            type="number"
          />
        </div>

        <div className="button-topup">
          <Button
            isLoading={loading}
            onClick={handleClick}
            className="button btn-login text-white p-2"
          >
            Top Up
          </Button>
        </div>
      </section>
    </Fragment>
  );
};

export default TopUpInput;
