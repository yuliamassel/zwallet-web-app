import React, { Fragment } from "react";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";

const Transaction = () => {
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            {/* <!-- main content for xs, sm, md --> */}
            <div className="small-screen-content d-lg-none animation-pull-out">
              <p className="weekly ms-3">This Week</p>

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

              <p className="monthly ms-3">This Month</p>

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
              <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 pt-2 pb-2">
                <img src="src/momo.svg" alt="Momo" />
                <div className="profile-description">
                  <p className="profile-desc-name mb-0">Momo Taro</p>
                  <p className="profile-desc mb-0">Transfer</p>
                </div>
                <p className="nominal-transfer">-Rp200.000</p>
              </div>

              {/* <!-- button transaction history --> */}
              <div className="row-cols-3 btn btn-history d-flex flex-row m-0 p-2">
                <button className="col-2 income m-1">
                  <i className="bi-arrow-up text-green icons-size"></i>
                </button>
                <button className="col-2 expense m-1">
                  <i className="bi-arrow-down text-red icons-size"></i>
                </button>
                <button className="col-6 calendar ms-5 m-1 me-2 icons-size">
                  Filter by Date
                </button>
              </div>
            </div>

            {/* <!-- main content for lg, xl, xxl --> */}
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />

              <section className="content-bar big-screen col-lg-8 animation-pull-out">
                <p className="history-title mt-3 ms-4">Transaction History</p>

                <p className="weekly ms-4">This Week</p>

                <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 ms-3 me-3 pt-2 pb-2">
                  <img className="ms-3" src="src/samuel.svg" alt="Samuel" />
                  <div className="profile-description history-page">
                    <p className="profile-desc-name mb-0">Samuel Suhi</p>
                    <p className="profile-desc mb-0">Transfer</p>
                  </div>
                  <p className="nominal-transfer me-3">+Rp50.000</p>
                </div>
                <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 ms-3 me-3 pt-2 pb-2">
                  <img className="ms-3" src="src/netflix.svg" alt="Netflix" />
                  <div className="profile-description history-page">
                    <p className="profile-desc-name mb-0">Netflix</p>
                    <p className="profile-desc mb-0">Subscription</p>
                  </div>
                  <p className="nominal-subscription me-3">-Rp149.000</p>
                </div>

                <p className="monthly ms-4">This Month</p>

                <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 ms-3 me-3 pt-2 pb-2">
                  <img
                    className="ms-3"
                    src="src/christine.svg"
                    alt="Christine"
                  />
                  <div className="profile-description history-page">
                    <p className="profile-desc-name mb-0">Christine Marimar</p>
                    <p className="profile-desc mb-0">Transfer</p>
                  </div>
                  <p className="nominal-transfer me-3">+Rp150.000</p>
                </div>
                <div className="history-transaction-profiles d-flex flex-row justify-content-between align-items-center mb-4 ms-3 me-3 pt-2 pb-2">
                  <img className="ms-3" src="src/adobe.svg" alt="Adobe" />
                  <div className="profile-description history-page">
                    <p className="profile-desc-name mb-0">Adobe Inc.</p>
                    <p className="profile-desc mb-0">Transfer</p>
                  </div>
                  <p className="nominal-subscription me-3">-Rp259.000</p>
                </div>
              </section>
            </div>
          </main>

          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default Transaction;
