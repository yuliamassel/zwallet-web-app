import React, { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import "./newphone.css";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";

const NewPhone = () => {
  const [form, setForm] = useState({ phone: "" });
  const id = JSON.parse(localStorage.getItem("userId"));
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = () => {
    setLoading(true);
    axios
      .put(`${process.env.REACT_APP_ZWALLET_API}/users/profile/${id}`, {
        phone: form.phone
      })
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        setUser(result);
        navigate("/apps/manage-phone");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        if (err.response.status) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage("We have trouble");
        }
      });
  };
  console.log(user);

  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="new-phone-content d-flex flex-column">
          <div className="new-phone-text">
            <p className="new-phone-title">Add Phone Number</p>
            <p className="new-phone-desc">
              Add at least one phone number for the transfer <br /> ID so you
              can start transfering your money to <br /> another user.
            </p>
          </div>
        </section>

        <div className="form-new-phone d-flex flex-column justify-content-center align-items-center">
          <div className="input-form pass d-flex mt-5">
            <BsIcons.BsTelephone className="form-icons position-absolute" />
            <span className=" phone-code position-absolute ">+62</span>
            <Input
              value={form.phone}
              onChange={handleChange}
              name="phone"
              className="input-new-phone"
              placeholder="Enter your phone number"
              type="text"
            />
          </div>

          {errorMessage ? (
            <p className="text-error mb-0">{errorMessage}</p>
          ) : null}

          <div className="btn-new-phone d-flex align-items-center mt-0">
            <Button
              isLoading={loading}
              onClick={handleClick}
              className="button btn-login btn-add-phone"
            >
              Add Phone Number
            </Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NewPhone;
