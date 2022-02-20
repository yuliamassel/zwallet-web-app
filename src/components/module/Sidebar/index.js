import React, { Fragment } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate("");
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  const logOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    navigate("/auth/login");
  };
  return (
    <Fragment>
      <aside className="menu-bar col-lg-2 d-lg-flex flex-column">
        <section className="menu-bar-nav d-lg-flex flex-column mb-5 mt-2">
          <Link to={"/apps"}>
            <div
              className={
                pathname === "/apps" || pathname === "/apps/history"
                  ? "menu-items d-lg-flex align-items-center m-2 ms-0 me-0 active-page"
                  : "menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
              }
            >
              <BsIcons.BsGrid className="icons-size ms-4" />
              <p className="ms-4 mt-3">Dashboard</p>
            </div>
          </Link>

          <Link to={"/apps/receiver"}>
            <div
              className={
                splitLocation[2] === "receiver" ||
                splitLocation[2] === "transfer" ||
                splitLocation[2] === "confirmation" ||
                splitLocation[2] === "status"
                  ? "menu-items d-lg-flex align-items-center m-2 ms-0 me-0 active-page"
                  : "menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
              }
            >
              <BsIcons.BsArrowUp className="icons-size ms-4" />
              <p className="ms-4 mt-3">Transfer</p>
            </div>
          </Link>

          <Link to={"/apps/topup"}>
            <div
              className={
                splitLocation[2] === "topup" ||
                splitLocation[2] === "topup-input"
                  ? "menu-items d-lg-flex align-items-center m-2 ms-0 me-0 active-page"
                  : "menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
              }
            >
              <AiIcons.AiOutlinePlus className="icons-size ms-4" />
              <p className="ms-4 mt-3">Top Up</p>
            </div>
          </Link>

          <Link to={"/apps/profile"}>
            <div
              className={
                splitLocation[2] === "profile" ||
                splitLocation[2] === "personal-information" ||
                splitLocation[2] === "change-password" ||
                splitLocation[2] === "change-PIN" ||
                splitLocation[2] === "new-phone" ||
                splitLocation[2] === "manage-phone"
                  ? "menu-items d-lg-flex align-items-center m-2 ms-0 me-0 active-page"
                  : "menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
              }
            >
              <BsIcons.BsPerson className="icons-size ms-4" />
              <p className="ms-4 mt-3">Profile</p>
            </div>
          </Link>
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
