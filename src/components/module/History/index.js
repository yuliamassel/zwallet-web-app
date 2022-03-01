/* eslint-disable array-callback-return */
import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./history.css";
import img from "../../../assets/img/blank-profile-picture.png";
import * as RiIcons from "react-icons/ri";

const History = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/transaction/history`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        const result = res.data.data;
        setHistory(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

        {history.length > 0 ? (
          history.map((profile, index) => {
            if (profile.status === "Success") {
              return (
                <div key={index} className="history-transaction-profiles ">
                  <img
                    src={
                      profile.receiver_picture ? profile.receiver_picture : img
                    }
                    height="52px"
                    className="user-pic m-1"
                    alt="Samuel"
                  />
                  <div className="profile-description">
                    <p className="profile-desc-name">{profile.receiver_name}</p>
                    <p className="profile-desc">{profile.date}</p>
                  </div>
                  <p className="nominal-subscription">
                    -Rp{profile.amount_transfer}
                  </p>
                </div>
              );
            }
          })
        ) : (
          <div className="no-transactions d-flex flex-column justify-content-center align-items-center">
            <RiIcons.RiFileList3Line className="no-transactions-icon" />
            <p className="no-transactions-text mt-2">No Transactions</p>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default History;
