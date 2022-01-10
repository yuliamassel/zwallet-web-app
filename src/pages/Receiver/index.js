import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Input from "../../components/base/Input";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import img from "../../assets/img/blank-profile-picture.png";

const Receiver = () => {
  const navigate = useNavigate("");
  const toInputTransfer = () => {
    navigate("/transfer");
  };
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            {/* <!-- main content for xs, sm --> */}
            <div className="small-screen-content d-lg-none animation-pull-out">
              {/* <!-- search input for md --> */}
              <div className="search-receiver d-flex d-md-block d-none d-lg-none bg-input m-3">
                <i className="bi-search text-grey icons-size ms-3"></i>
                <input
                  className="ms-3 p-2 text-grey bg-search-input search-receiver-input"
                  placeholder="Search receiver here"
                  type="text"
                />
              </div>

              <p className="text-title-name mt-2 ms-3">Contacts</p>
              <p className="weekly ms-3">17 Contacts Found</p>

              {/* <!-- receiver list for xs, sm, md --> */}
              <a href="transfer_input.html">
                <div className="d-flex receivers p-2 mb-3 ms-2 me-2 ">
                  <img
                    className="receiver-picture ms-4"
                    src="src/samuel.svg"
                    alt="Samuel"
                  />
                  <div className="receiver-detail mt-2 ms-3">
                    <p className="text-title-name mb-0">Samuel Suhi</p>
                    <p className="weekly mt-1">+62 813-8492-9994</p>
                  </div>
                </div>
              </a>

              <div className="d-flex receivers p-2 mb-3 ms-2 me-2">
                <img
                  className="receiver-picture ms-4"
                  src="src/jessica.svg"
                  alt="Julia"
                  width="52px"
                />
                <div className="receiver-detail mt-2 ms-3">
                  <p className="text-title-name mb-0">Julia Syen</p>
                  <p className="weekly mt-1">+62 812-3942-3656</p>
                </div>
              </div>
              <div className="d-flex receivers p-2 mb-3 ms-2 me-2">
                <img
                  className="receiver-picture ms-4"
                  src="src/bobi.png"
                  alt="Bobi"
                  width="52px"
                  height="54px"
                />
                <div className="receiver-detail mt-2 ms-3">
                  <p className="text-title-name mb-0">Bobi Sammy</p>
                  <p className="weekly mt-1">+62 813-5982-2940</p>
                </div>
              </div>
              <div className="d-flex receivers p-2 mb-3 ms-2 me-2">
                <img
                  className="receiver-picture ms-4"
                  src="src/juliana.png"
                  alt="Juliana"
                  width="52px"
                  height="54px"
                />
                <div className="receiver-detail mt-2 ms-3">
                  <p className="text-title-name mb-0">Juliana Rich</p>
                  <p className="weekly mt-1">+62 811-6212-5663</p>
                </div>
              </div>
              <div className="d-flex receivers p-2 mb-3 ms-2 me-2">
                <img
                  className="receiver-picture ms-4"
                  src="src/christine.svg"
                  alt="Michi"
                  width="52px"
                />
                <div className="receiver-detail mt-2 ms-3">
                  <p className="text-title-name mb-0">Michi Mei</p>
                  <p className="weekly mt-1">+62 813-3891-3838</p>
                </div>
              </div>
              <div className="d-flex receivers p-2 mb-3 ms-2 me-2 ">
                <img
                  className="receiver-picture ms-4"
                  src="src/momo.svg"
                  alt="Dody"
                  width="52px"
                />
                <div className="receiver-detail mt-2 ms-3">
                  <p className="text-title-name mb-0">Dody Besari</p>
                  <p className="weekly mt-1">+62 0812-4334-3561</p>
                </div>
              </div>
            </div>

            {/* <!-- main content for lg, xl, xxl --> */}
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />

              <section className="content-bar d-md-block big-screen col-lg-8 animation-pull-out">
                <p className="history-title mt-3 ms-4">Search Receiver</p>

                {/* <!-- search input for lg, xl, xxl--> */}
                <div className="search-receiver d-flex align-items-center bg-input m-3">
                  <BsIcons.BsSearch className="icons-size text-grey ms-3" />
                  <Input
                    className="ms-3 p-2 text-grey bg-search-input search-receiver-input desktop"
                    placeholder="Search receiver here"
                    type="text"
                  />
                </div>

                {/* <!-- receiver list for lg, xl, xxl --> */}

                <div
                  onClick={toInputTransfer}
                  className="d-flex receivers p-1 mb-3 ms-3 me-3 "
                >
                  <img
                    className="receiver-picture user-pic mt-2 ms-4"
                    src={img}
                    height="54px"
                    alt="Samuel"
                  />
                  <div className="receiver-detail mt-2 ms-3">
                    <p className="text-title-name mb-0">Samuel Suhi</p>
                    <p className="weekly mt-1">+62 813-8492-9994</p>
                  </div>
                </div>

                <div className="d-flex receivers p-1 mb-3 ms-3 me-3 ">
                  <img
                    className="receiver-picture user-pic mt-2 ms-4"
                    src={img}
                    height="54px"
                    alt="Momo"
                  />
                  <div className="receiver-detail mt-2 ms-3">
                    <p className="text-title-name mb-0">Momo Taro</p>
                    <p className="weekly mt-1">+62 812-4343-6731</p>
                  </div>
                </div>
                <div className="d-flex receivers p-1 mb-3 ms-3 me-3 ">
                  <img
                    className="receiver-picture user-pic mt-2 ms-4"
                    src={img}
                    height="54px"
                    alt="Jessica"
                  />
                  <div className="receiver-detail mt-2 ms-3">
                    <p className="text-title-name mb-0">Jessica Keen</p>
                    <p className="weekly mt-1">+62 811-3452-5252</p>
                  </div>
                </div>
                <div className="d-flex receivers p-1 mb-3 ms-3 me-3 ">
                  <img
                    className="receiver-picture user-pic mt-2 ms-4"
                    src={img}
                    height="54px"
                    alt="Michael"
                  />
                  <div className="receiver-detail mt-2 ms-3">
                    <p className="text-title-name mb-0">Michael Le</p>
                    <p className="weekly mt-1">+62 810-4224-4613</p>
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

export default Receiver;
