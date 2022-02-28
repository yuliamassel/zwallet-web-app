/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";
import ModalSuccess from "../../../components/module/ModalSuccess";
import "./newphone.css";

// redux
import { useDispatch, useSelector } from "react-redux";
import { NewPhoneNumber } from "../../../redux/actions/apps/addPhoneNumber";
import { GetProfile } from "../../../redux/actions/apps/getProfile";

const NewPhone = () => {
  const dispatch = useDispatch();
  const newPhoneData = useSelector((state) => state.NewPhoneNumber);
  const profileData = useSelector((state) => state.GetProfile);

  const [form, setForm] = useState({ phone: "" });
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = () => {
    dispatch(NewPhoneNumber({ form, handleModalSuccess, setErrorMessage }));
  };

  useEffect(() => {
    dispatch(GetProfile());
  }, []);

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
                isLoading={newPhoneData.loading}
                onClick={handleClick}
                className="button btn-login btn-add-phone"
              >
                Add Phone Number
              </Button>
            </div>
          </div>

          {openModalSuccess ? (
            <ModalSuccess
              successTitle="Add Phone Number Success!"
              successDesc={`Phone number +62 ${form.phone} successfully added to your profile. Now you can start transactions!`}
              action="Go back to Profile"
              closeModal={handleNavigate}
            />
          ) : null}
        </section>
      </section>
    </Fragment>
  );
};

export default NewPhone;
