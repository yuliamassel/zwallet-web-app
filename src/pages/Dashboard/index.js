import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import "./dashboard.css";
import Header from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import Sidebar from "../../components/module/Sidebar";
import Balance from "../../components/module/Balance";
import Chart from "../../components/module/Charts";
import History from "../../components/module/History";

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useState(() => {
    const user = localStorage.getItem("userId");
    const convertedUser = JSON.parse(user);
    return convertedUser;
  });
  const [userHeader, setUserHeader] = useState({
    userFullName: "",
    userPhone: "",
    balance: 0
  });
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/details/${userId}`, {
        headers: { auth: "admin" }
      })
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        setUserHeader({
          userFullName: `${result.first_name} ${result.last_name}`,
          userPhone: `${result.phone}`,
          balance: `${result.balance}`
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            {/* <!-- button for xs, sm, md version --> */}
            <div className="btn btn-transaction d-flex flex-row mt-3 d-lg-none animation-pull-out">
              <button className="transfer-default d-flex flex-row justify-content-evenly align-items-center m-1">
                <BsIcons.BsArrowUp className="icons-size text-blue" />
                <p className="mt-3">Transfer</p>
              </button>
              <button className="topup-default d-flex flex-row justify-content-evenly align-items-center m-1">
                <AiIcons.AiOutlinePlus className="icons-size text-blue" />
                <p className="mt-3">Top Up</p>
              </button>
            </div>

            {/* <!-- main content for xs, sm, md --> */}
            <div className="small-screen-content d-lg-none animation-pull-out">
              <div className="transaction-history-title d-flex flex-row justify-content-between mt-4 mb-3">
                <p className="history-title">Transaction History</p>
                <a href="history.html">
                  <p className="text-blue"> See All</p>
                </a>
              </div>

              <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 pt-2 pb-2">
                <img src="src/samuel.svg" alt="Samuel" />
                <div className="profile-description">
                  <p className="profile-desc-name mb-0">Samuel Suhi</p>
                  <p className="profile-desc mb-0">Transfer</p>
                </div>
                <p className="nominal-transfer">+Rp50.000</p>
              </div>
              <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 pt-2 pb-2">
                <img src="src/spotify.png" alt="Spotify" />
                <div className="profile-description">
                  <p className="profile-desc-name mb-0">Spotify</p>
                  <p className="profile-desc mb-0">Subscription</p>
                </div>
                <p className="nominal-subscription">-Rp49.000</p>
              </div>
              <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 pt-2 pb-2">
                <img src="src/netflix.svg" alt="Netflix" />
                <div className="profile-description">
                  <p className="profile-desc-name mb-0">Netflix</p>
                  <p className="profile-desc mb-0">Subscription</p>
                </div>
                <p className="nominal-subscription">-Rp149.000</p>
              </div>
              <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 pt-2 pb-2">
                <img src="src/bobi.png" alt="Bobi" />
                <div className="profile-description">
                  <p className="profile-desc-name mb-0">Bobi Sammy</p>
                  <p className="profile-desc mb-0">Transfer</p>
                </div>
                <p className="nominal-transfer">+Rp1.150.000</p>
              </div>
            </div>

            {/* <!-- main content for lg, xl, xxl --> */}
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />

              <section className="content-bar col-lg-8 animation-pull-out ">
                <section className="menu-content ">
                  <Balance
                    balance={userHeader.balance}
                    user_phone={userHeader.userPhone}
                  />

                  <section className="row history-content d-lg-flex flex-row">
                    <Chart />

                    <History />
                  </section>
                </section>
              </section>
            </div>
          </main>

          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default Dashboard;
