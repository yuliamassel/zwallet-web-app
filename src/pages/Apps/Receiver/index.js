import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Input from "../../../components/base/Input";
import img from "../../../assets/img/blank-profile-picture.png";

const Receiver = () => {
  const navigate = useNavigate("");
  const toInputTransfer = () => {
    navigate("/apps/transfer");
  };
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Receiver;
