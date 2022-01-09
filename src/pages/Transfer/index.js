import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Button from "../../components/base/Button";
import Input from "../../components/base/Input";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import img from "../../assets/img/blank-profile-picture.png";

const Transfer = () => {
  const navigate = useNavigate("");
  const toConfirmPage = () => {
    navigate("/transfer-confirmation");
  };
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            {/* <!-- main content for xs, sm, md --> */}
            <div className="small-screen-content d-lg-none animation-pull-out">
              {/* <!-- receiver md --> */}
              <div className="d-none d-md-flex d-md-block receivers p-2 mb-3 mt-3 ms-5 me-5 ">
                <img
                  className="receiver-picture ms-4"
                  src="src/samuel.svg"
                  alt="Samuel"
                />
                <div className="receiver-detail ms-3">
                  <p className="text-title-name mb-0">Samuel Suhi</p>
                  <p className="weekly mt-1">+62 813-8492-9994</p>
                </div>
              </div>

              {/* <!-- input amount money for xs, sm, md --> */}
              <div className="input-amount-money m-5 d-flex justify-content-center ">
                <input
                  className="text-center w-50 bg-transparent"
                  placeholder="0.00"
                  type="text"
                />
              </div>

              <p className="text-title-name text-center">Rp120.000 Available</p>

              <div className="input-notes d-flex ms-5 me-5 ">
                <i className="bi-pen ps-1 position-absolute text-grey"></i>
                <input
                  className="ps-5 p-1 w-100 bg-transparent"
                  placeholder="Add some notes"
                  type="text"
                  name="notes"
                  id="notes"
                />
              </div>

              {/* <!-- button continue for xs, sm, md --> */}
              <div className="btn-continue d-flex d-md-none justify-content-center">
                <button className="btn text-white w-100 p-2 shadow">
                  Continue
                </button>
              </div>

              {/* <!-- button continue for md --> */}
              <div className="btn-continue d-md-flex d-none d-md-block justify-content-center">
                <button className="btn text-white w-50 p-2 shadow">
                  Continue
                </button>
              </div>
            </div>

            {/* <!-- main content for lg, xl, xxl --> */}
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />

              <section className="content-bar big-screen col-lg-8 animation-pull-out">
                <p className="history-title mt-3 ms-4">Transfer Money</p>

                {/* <!-- receiver lg, xl, xxl --> */}
                <div className="d-flex receivers  mb-3 mt-3 ms-4 me-4 ">
                  <img
                    class="receiver-picture user-pic mt-2 ms-4"
                    src={img}
                    height="54px"
                    alt="Samuel"
                  />
                  <div className="receiver-detail ms-3 mt-2">
                    <p className="text-title-name mb-0">Samuel Suhi</p>
                    <p className="weekly mt-1">+62 813-8492-9994</p>
                  </div>
                </div>

                <p className="transfer-instruction ms-4 mt-3">
                  Type the amount you want to transfer and then <br></br> press
                  continue to the next steps.
                </p>

                {/* <!-- input amount money for lg, xl, xxl --> */}
                <div className="input-amount-money mb-2 mt-3">
                  <Input
                    className=" input-amount text-center bg-transparent"
                    placeholder="0.00"
                    type="number"
                  />
                </div>

                <p className="text-title-name text-center">
                  Rp120.000 Available
                </p>

                <div className="input-notes notes-position d-flex mt-4 w-50 ">
                  <BsIcons.BsPen className="pen text-grey position-absolute ms-1" />
                  <Input
                    className="ps-5 p-1 w-100 bg-transparent"
                    placeholder="Add some notes"
                    type="text"
                    name="notes"
                    id="notes"
                  />
                </div>

                {/* <!-- button continue for lg, xl, xxl --> */}
                <div className="btn-continue-desktop d-flex justify-content-end ms-5 me-5">
                  <Button
                    onClick={toConfirmPage}
                    className="button text-white w-25 p-2 shadow"
                  >
                    Continue
                  </Button>
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

export default Transfer;
