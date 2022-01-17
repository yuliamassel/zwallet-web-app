import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/base/Button";
import img from "../../../assets/img/blank-profile-picture.png";

const TransferConfirm = () => {
  const navigate = useNavigate("");
  const toStatusPage = () => {
    navigate("/apps/status");
  };
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out">
        <p className="history-title mt-3 ms-4">Transfer To</p>

        {/* <!-- receiver lg, xl, xxl --> */}
        <div className="d-flex receivers p-1 mb-3 mt-2 ms-4 me-4 ">
          <img
            className="receiver-picture user-pic mt-2 ms-4"
            src={img}
            height="54px"
            alt="Samuel"
          />
          <div className="receiver-detail ms-3 mt-2">
            <p className="text-title-name mb-0">Samuel Suhi</p>
            <p className="weekly mt-1">+62 813-8492-9994</p>
          </div>
        </div>

        <p className="history-title mt-3 ms-4">Details</p>

        <div className="details-transfer ms-2 me-2 ">
          <div className="row mt-2 me-1">
            <div className="col-5 col-md-11 ms-3 ms-md-5 me-md-5 confirm-items ">
              <p className="text-title m-2">Amount</p>
              <p className="text-content m-2">Rp100.000</p>
            </div>
            <div className="col-5 col-md-11 offset-1 ms-md-5 me-md-5 confirm-items mt-md-1">
              <p className="text-title m-2">Balance Left</p>
              <p className="text-content m-2">Rp20.000</p>
            </div>
          </div>
          <div className="row mt-4 mt-md-1 me-1">
            <div className="col-5 col-md-11 ms-3 ms-md-5 me-md-5 confirm-items ">
              <p className="text-title m-2">Date & Time</p>
              <p className="text-content m-2">May, 11 2020 - 12.20</p>
            </div>
          </div>
          <div className="row mt-4 mt-md-1 mb-md-5 me-1">
            <div className="col-11 ms-3 ms-md-5 me-md-5 confirm-items ">
              <p className="text-title m-2">Notes</p>
              <p className="text-content m-2">For buying some socks</p>
            </div>
          </div>
        </div>

        {/* <!-- button continue for lg, xl, xxl --> */}
        <div className="btn-continue-desktop confirm d-flex justify-content-end me-5 mt-4">
          <Button
            onClick={toStatusPage}
            className="button text-white w-25 p-2 shadow"
          >
            Continue
          </Button>
        </div>
      </section>
    </Fragment>
  );
};

export default TransferConfirm;
