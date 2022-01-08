import React, { Fragment } from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <Fragment>
      <nav className="menu-bar d-md-none d-lg-block col-lg-2 d-lg-flex flex-column animation-fade-in">
        <section className="menu-bar-nav d-lg-flex flex-column mb-5 mt-2">
          <div className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0 active-page">
            <i className="bi-grid ms-4 icons-size"></i>
            <p className="ms-4 mt-3">Dashboard</p>
          </div>

          <div className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0">
            <i className="bi-arrow-up ms-4 icons-size"></i>
            <p className="ms-4 mt-3">Transfer</p>
          </div>
          <div className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0">
            <i className="bi-plus-lg ms-4 icons-size"></i>
            <p className="ms-4 mt-3">Top Up</p>
          </div>
          <div className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0">
            <i className="bi-person ms-4 icons-size"></i>
            <p className="ms-4 mt-3">Profile</p>
          </div>
        </section>
        <section className="menu-bar-log mt-5 mb-2">
          <div className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0">
            <i className="bi-box-arrow-in-right ms-4 icons-size"></i>
            <p className="ms-4 mt-3">Log Out</p>
          </div>
        </section>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
