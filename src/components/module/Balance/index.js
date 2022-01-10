import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import "./balance.css";
import Button from "../../base/Button";

const Balance = () => {
  const navigate = useNavigate("");
  const handleClick = () => {
    navigate("/receiver");
  };
  return (
    <Fragment>
      <section className="balance big-screen">
        <div className="saldo">
          <p className="saldo-text">Balance</p>
          <p className="saldo-nominal">Rp120.000</p>
          <p className="saldo-contact">+62 813-9387-7946</p>
        </div>
        <div className="btn-transaction">
          {/* <!-- link to transfer receiver page --> */}
          <Button onClick={handleClick} className="transfer align-items-center">
            <BsIcons.BsArrowUp className="icons-size" />
            <p>Transfer</p>
          </Button>
          <Button className="topup align-items-center">
            <AiIcons.AiOutlinePlus className="icons-size" />
            <p>Top Up</p>
          </Button>
        </div>
      </section>
    </Fragment>
  );
};

export default Balance;
