import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/base/Button";
import img from "../../../assets/img/blank-profile-picture.png";
import axios from "axios";

const TransferConfirm = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { id } = useParams(); // ini akan menangkap params dari url bar browser
  const [userReceiver, setUserReceiver] = useState({ picture: "" });
  const [transaction, setTransaction] = useState({
    receiver_name: "",
    receiver_phone: "",
    amount_transfer: "",
    balance_left: "",
    date: "",
    notes: ""
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/details/${id}`, {
        //id ini ditangkap dari tab url browser
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data;
        console.log(result);
        setUserReceiver(result);
      })
      .catch((err) => {
        console.log(err.response);
      });

    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/transaction/history`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data[0];
        setTransaction(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();
  const toStatusPage = () => {
    navigate(`/apps/status/${id}`);
  };
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out">
        <p className="history-title mt-3 ms-4">Transfer To</p>

        {/* <!-- receiver lg, xl, xxl --> */}
        <div className="d-flex receivers p-1 mb-3 mt-2 ms-4 me-4 ">
          <img
            className="receiver-picture user-pic mt-2 ms-4"
            src={userReceiver.picture ? userReceiver.picture : img}
            height="54px"
            alt="Samuel"
          />
          <div className="receiver-detail ms-3 mt-2">
            <p className="text-title-name mb-0">{transaction.receiver_name}</p>
            <p className="weekly mt-1">+62 {transaction.receiver_phone}</p>
          </div>
        </div>

        <p className="history-title mt-3 ms-4">Details</p>

        <div className="details-transfer ms-2 me-2 ">
          <div className="row mt-2 me-1">
            <div className="col-5 col-md-11 ms-3 ms-md-5 me-md-5 confirm-items ">
              <p className="text-title m-2">Amount</p>
              <p className="text-content m-2">
                Rp {transaction.amount_transfer}
              </p>
            </div>
            <div className="col-5 col-md-11 offset-1 ms-md-5 me-md-5 confirm-items mt-md-1">
              <p className="text-title m-2">Balance Left</p>
              <p className="text-content m-2">Rp {transaction.balance_left}</p>
            </div>
          </div>
          <div className="row mt-4 mt-md-1 me-1">
            <div className="col-5 col-md-11 ms-3 ms-md-5 me-md-5 confirm-items ">
              <p className="text-title m-2">Date & Time</p>
              <p className="text-content m-2">{transaction.date}</p>
            </div>
          </div>
          <div className="row mt-4 mt-md-1 mb-md-5 me-1">
            <div className="col-11 ms-3 ms-md-5 me-md-5 confirm-items ">
              <p className="text-title m-2">Notes</p>
              <p className="text-content m-2">{transaction.notes}</p>
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
