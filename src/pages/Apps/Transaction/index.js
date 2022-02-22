import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import img from "../../../assets/img/blank-profile-picture.png";
import * as RiIcons from "react-icons/ri";

const Transaction = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/transaction/history`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data;
        setHistory(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <section className="content-bar big-screen col-lg-8 animation-pull-out">
        <p className="history-title mt-3 ms-4">Transaction History</p>

        <p className="weekly ms-4">This Week</p>

        {history.length > 0 ? (
          history.map((profile, index) => (
            <div
              key={index}
              className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-3 ms-3 me-3 pt-2 pb-2"
            >
              <img
                className="receiver-picture user-pic mt-1 ms-3"
                src={img}
                height="54px"
                alt="Samuel"
              />
              <div className="profile-description history-page">
                <p className="profile-desc-name mb-0">
                  {profile.receiver_name}
                </p>
                <p className="profile-desc mb-0">{profile.date}</p>
              </div>
              <p className="nominal-subscription me-3">
                -Rp{profile.amount_transfer}
              </p>
            </div>
          ))
        ) : (
          <div className="no-transactions d-flex flex-column justify-content-center align-items-center mt-5">
            <RiIcons.RiFileList3Line className="no-transactions-icon" />
            <p className="no-transactions-text mt-2">No Transactions</p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default Transaction;
