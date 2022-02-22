import React, { Fragment } from "react";
import * as BsIcons from "react-icons/bs";
import "./chart.css";
import graphic from "../../../assets/img/graphic.png";

const Chart = () => {
  return (
    <Fragment>
      <section className="col-lg-6 history-content-chart d-flex flex-column ms-3">
        <div className="financial">
          <div className="income">
            <BsIcons.BsArrowDown className="icons-size text-green" />
            <p className="financial-text">Income</p>
            <p className="financial-cash">Rp 0</p>
          </div>
          <div className="expense">
            <BsIcons.BsArrowUp className="icons-size text-red" />
            <p className="financial-text">Expense</p>
            <p className="financial-cash">Rp 0</p>
          </div>
        </div>
        <div className="graphic">
          <img className="mt-5 mb-2" src={graphic} alt="Graphic" />
        </div>
      </section>
    </Fragment>
  );
};

export default Chart;
