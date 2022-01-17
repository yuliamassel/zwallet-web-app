import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./history.css";
import img from "../../../assets/img/blank-profile-picture.png";

const History = () => {
  const navigate = useNavigate();
  const toTransactionPage = () => {
    navigate("/apps/history");
  };
  return (
    <Fragment>
      <section className="col-lg-6 history-content-transaction d-lg-flex flex-column me-3">
        <div className="history-transaction-title ms-2">
          <p className="">Transaction History</p>

          <p onClick={toTransactionPage} className="history-page-link">
            See All
          </p>
        </div>

        <div className="history-transaction-profiles ">
          <img src={img} height="52px" className="user-pic m-1" alt="Samuel" />
          <div className="profile-description">
            <p className="profile-desc-name">Samuel Suhi</p>
            <p className="profile-desc">Transfer</p>
          </div>
          <p className="nominal-transfer">+Rp50.000</p>
        </div>

        <div className="history-transaction-profiles ">
          <img src={img} height="52px" className="user-pic m-1" alt="Netflix" />
          <div className="profile-description">
            <p className="profile-desc-name">Netflix</p>
            <p className="profile-desc">Subscription</p>
          </div>
          <p className="nominal-subscription">-Rp149.000</p>
        </div>
        <div className="history-transaction-profiles ">
          <img
            src={img}
            height="52px"
            className="user-pic m-1"
            alt="Christine"
          />
          <div className="profile-description">
            <p className="profile-desc-name">Christine</p>
            <p className="profile-desc">Transfer</p>
          </div>
          <p className="nominal-transfer">+Rp150.000</p>
        </div>

        <div className="history-transaction-profiles ">
          <img src={img} height="52px" className="user-pic m-1" alt="Adobe" />
          <div className="profile-description">
            <p className="profile-desc-name">Adobe Inc.</p>
            <p className="profile-desc">Subscription</p>
          </div>
          <p className="nominal-subscription">-Rp249.000</p>
        </div>
      </section>
    </Fragment>
  );
};

export default History;
