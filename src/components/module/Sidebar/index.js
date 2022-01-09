import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate("");
  const toDashboard = () => {
    navigate("/");
  };
  const toTransferPage = () => {
    navigate("/receiver");
  };
  const toTopUpPage = () => {
    navigate("/topup");
  };
  const toProfilePage = () => {
    navigate("/profile");
  };
  const logOut = () => {
    navigate("/login");
  };
  return (
    <Fragment>
      <aside className="menu-bar col-lg-2 d-lg-flex flex-column animation-fade-in">
        <section className="menu-bar-nav d-lg-flex flex-column mb-5 mt-2">
          <div
            onClick={toDashboard}
            className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0 active-page"
          >
            <BsIcons.BsGrid className="icons-size ms-4" />
            <p className="ms-4 mt-3">Dashboard</p>
          </div>

          <div
            onClick={toTransferPage}
            className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
          >
            <BsIcons.BsArrowUp className="icons-size ms-4" />
            <p className="ms-4 mt-3">Transfer</p>
          </div>

          <div
            onClick={toTopUpPage}
            className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
          >
            <AiIcons.AiOutlinePlus className="icons-size ms-4" />
            <p className="ms-4 mt-3">Top Up</p>
          </div>
          <div
            onClick={toProfilePage}
            className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
          >
            <BsIcons.BsPerson className="icons-size ms-4" />
            <p className="ms-4 mt-3">Profile</p>
          </div>
        </section>
        <section className="menu-bar-log mt-5 mb-2">
          <div
            onClick={logOut}
            className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
          >
            <BsIcons.BsBoxArrowInRight className="icons-size ms-4" />
            <p className="ms-4 mt-3">Log Out</p>
          </div>
        </section>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
