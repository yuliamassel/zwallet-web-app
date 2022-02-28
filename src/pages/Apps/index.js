import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import "./apps.css";

const Apps = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/auth/login"} />;
  }
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

              <Outlet />
            </div>
          </main>

          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default Apps;
