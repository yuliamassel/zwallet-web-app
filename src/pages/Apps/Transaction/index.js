import React, { Fragment } from "react";
import img from "../../../assets/img/blank-profile-picture.png";

const Transaction = () => {
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out">
        <p className="history-title mt-3 ms-4">Transaction History</p>

        <p className="weekly ms-4">This Week</p>

        <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-3 ms-3 me-3 pt-2 pb-2">
          <img
            className="receiver-picture user-pic mt-1 ms-3"
            src={img}
            height="54px"
            alt="Samuel"
          />
          <div className="profile-description history-page">
            <p className="profile-desc-name mb-0">Samuel Suhi</p>
            <p className="profile-desc mb-0">Transfer</p>
          </div>
          <p className="nominal-transfer me-3">+Rp50.000</p>
        </div>

        <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-3 ms-3 me-3 pt-2 pb-2">
          <img
            className="receiver-picture user-pic mt-1 ms-3"
            src={img}
            height="54px"
            alt="Netflix"
          />
          <div className="profile-description history-page">
            <p className="profile-desc-name mb-0">Netflix</p>
            <p className="profile-desc mb-0">Subscription</p>
          </div>
          <p className="nominal-subscription me-3">-Rp149.000</p>
        </div>

        <p className="monthly ms-4">This Month</p>

        <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-3 ms-3 me-3 pt-2 pb-2">
          <img
            className="receiver-picture user-pic mt-1 ms-3"
            src={img}
            height="54px"
            alt="Christine"
          />
          <div className="profile-description history-page">
            <p className="profile-desc-name mb-0">Christine Marimar</p>
            <p className="profile-desc mb-0">Transfer</p>
          </div>
          <p className="nominal-transfer me-3">+Rp150.000</p>
        </div>

        <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-3 ms-3 me-3 pt-2 pb-2">
          <img
            className="receiver-picture user-pic mt-1 ms-3"
            src={img}
            height="54px"
            alt="Adobe"
          />
          <div className="profile-description history-page">
            <p className="profile-desc-name mb-0">Adobe Inc.</p>
            <p className="profile-desc mb-0">Transfer</p>
          </div>
          <p className="nominal-subscription me-3">-Rp259.000</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Transaction;
