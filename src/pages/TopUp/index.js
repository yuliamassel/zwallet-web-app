import React, { Fragment } from "react";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import "./topup.css";

const TopUp = () => {
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />
              <section className="content-bar big-screen col-lg-8 animation-pull-out ">
                <p className="topup-text ms-4 mt-3">How To Top Up</p>

                <div className="topup-instruction">
                  <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
                    <span className="number">1</span>
                    <p className="topup-instruction-text d-flex align-items-center ps-3">
                      Go to the nearest ATM or you can use E-Banking.
                    </p>
                  </div>
                  <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
                    <span className="number">2</span>
                    <p className="topup-instruction-text d-flex align-items-center ps-3">
                      Type your security number on the ATM or E-Banking.
                    </p>
                  </div>
                  <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
                    <span className="number">3</span>
                    <p className="topup-instruction-text d-flex align-items-center ps-3">
                      Select “Transfer” in the menu
                    </p>
                  </div>
                  <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
                    <span className="number">4</span>
                    <p className="topup-instruction-text d-flex align-items-center ps-3">
                      Type the virtual account number that we provide you at the
                      top.
                    </p>
                  </div>
                  <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
                    <span className="number">5</span>
                    <p className="topup-instruction-text d-flex align-items-center ps-3">
                      Type the amount of the money you want to top up.
                    </p>
                  </div>
                  <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
                    <span className="number">6</span>
                    <p className="topup-instruction-text d-flex align-items-center ps-3">
                      Read the summary details
                    </p>
                  </div>
                  <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
                    <span className="number">7</span>
                    <p className="topup-instruction-text d-flex align-items-center ps-3">
                      Press transfer / top up
                    </p>
                  </div>
                  <div className="topup-instruction-point d-flex flex-row ms-4 me-4 mb-3">
                    <span className="number">8</span>
                    <p className="topup-instruction-text d-flex align-items-center ps-3">
                      You can see your money in Zwallet within 3 hours.
                    </p>
                  </div>
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

export default TopUp;
