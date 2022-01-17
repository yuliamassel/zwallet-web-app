import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../../components/base/Button";
import Input from "../../../components/base/Input";

import "./newphone.css";

const NewPhone = () => {
  const navigate = useNavigate();
  const toManagePhonePage = () => {
    navigate("/apps/manage-phone");
  };
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="new-phone-content d-flex flex-column">
          <div className="new-phone-text mt-2">
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
              className="input-new-phone"
              placeholder="Enter your phone number"
              type="text"
              name="password"
            />
          </div>

          <div className="btn-new-phone d-flex align-items-center mt-0">
            <Button
              onClick={toManagePhonePage}
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
