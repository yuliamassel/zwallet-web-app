import axios from "axios";
import React, { Fragment, useContext, useState } from "react";
import * as FiIcons from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ModalAlert from "../../../components/module/ModalAlert";
import ModalSuccess from "../../../components/module/ModalSuccess";
import { UserContext } from "../../../context/UserContext";
import "./managephone.css";

const ManagePhone = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const [openModalAlert, setOpenModalAlert] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const handleModalAlert = () => {
    setOpenModalAlert(!openModalAlert);
  };
  const handleModalSuccess = () => {
    setOpenModalSuccess(!openModalSuccess);
  };
  const handleNavigate = () => {
    setOpenModalSuccess(!openModalSuccess);
    navigate("/apps/profile/phone/new");
  };

  const handleClick = () => {
    axios
      .put(
        `${process.env.REACT_APP_ZWALLET_API}/users/profile/delete-phone-number`,
        { phone: null },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const result = res.data.data;
        setUser(result);
        console.log(result);
        setOpenModalAlert();
        handleModalSuccess();
        // alert("Phone Number Deleted!");
        // navigate("/apps/profile/phone/new");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out ">
        <section className="manage-phone-content d-flex flex-column">
          <div className="manage-phone-text">
            <p className="manage-phone-title">Manage Phone Number</p>
            <p className="manage-phone-desc">
              You can only delete the phone number and then <br /> you must add
              another phone number.
            </p>
          </div>

          <div className="primary-phone-card d-flex flex-row justify-content-between align-items-center mt-3">
            <div>
              <p className="primary-phone-card-title ms-1">Phone Number</p>
              <p className="primary-phone-card-desc ms-1">
                {user.phone ? `+62 ${user.phone}` : "+ Add phone number"}
              </p>
            </div>
            <FiIcons.FiTrash
              onClick={handleModalAlert}
              className="delete-phone icons-size text-grey"
            />
          </div>
        </section>

        {openModalAlert ? (
          <ModalAlert
            alertIcon={<FiIcons.FiTrash />}
            alertTitle="Delete Phone Number"
            alertDesc="Are you sure you want to delete your phone number? This action cannot be undone."
            action="Delete"
            closeModal={handleModalAlert}
            handleAction={handleClick}
          />
        ) : null}

        {openModalSuccess ? (
          <ModalSuccess
            successTitle="Phone Number Deleted!"
            successDesc="Please add a new phone number for transactions."
            action="Add New Number"
            closeModal={handleNavigate}
          />
        ) : null}
      </section>
    </Fragment>
  );
};

export default ManagePhone;
