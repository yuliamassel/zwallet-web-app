import React, { Fragment, useContext } from "react";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import { UserContext } from "../../../context/UserContext";
import "./chart.css";
// import graphic from "../../../assets/img/graphic.png";

const Chart = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  return (
    <Fragment>
      <section className="col-lg-6 history-content-chart d-flex flex-column ms-3">
        <div className="financial">
          <div className="income">
            <BsIcons.BsArrowDown className="icons-size text-green" />
            <p className="financial-text">Income</p>
            <p className="financial-cash">Rp {user.income}</p>
          </div>
          <div className="expense">
            <BsIcons.BsArrowUp className="icons-size text-red" />
            <p className="financial-text">Expense</p>
            <p className="financial-cash">Rp {user.expense}</p>
          </div>
        </div>
        <div className="graphic d-flex flex-column justify-content-center align-items-center">
          {/* <img className="mt-5 mb-2" src={graphic} alt="Graphic" /> */}
          <div className="no-chart-record d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
            <FiIcons.FiBarChart2 className="no-chart-icon mt-2" />
            <p className="no-chart-text mt-1 mb-4">No Records</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Chart;
