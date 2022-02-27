import React, { Fragment, useContext, useState } from "react";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import "./topupinput.css";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TopUpInput = () => {
  const [topupForm, setTopupForm] = useState({ amount_topup: "" });
  const token = JSON.parse(localStorage.getItem("token"));
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

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
      setLoading(true);
      axios
        .put(
          `${process.env.REACT_APP_ZWALLET_API}/wallet/topup/`,
          { amount_topup: topupForm.amount_topup },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          setLoading(false);
          const result = res.data.data;
          setUser(result);
          alert("Top Up Success!");
          navigate("/apps");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response);
          if (err.response.status === 500) {
            setErrorMessage("We have trouble");
          } else {
            setErrorMessage(err.response.data.message);
          }
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const resultValidate = validate(topupForm);
    setFormError(resultValidate);
    handleTopUp(resultValidate);
    console.log(topupForm);
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
            Zwallet Balance: Rp {user.balance}
          </p>

          <div className="button-topup">
            <Button
              isLoading={loading}
              type="submit"
              className="button btn-login btn-topup text-white p-2"
            >
              Top Up
            </Button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default TopUpInput;
