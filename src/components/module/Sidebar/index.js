import React, { Fragment, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import "./sidebar.css";
import ModalAlert from "../ModalAlert";

const Sidebar = () => {
  const navigate = useNavigate("");
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  const [openModalAlert, setOpenModalAlert] = useState(false);

  const handleModalAlert = () => {
    setOpenModalAlert(!openModalAlert);
  };
  const logOut = () => {
    localStorage.clear();
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

          <Link to={"/apps/receivers"}>
            <div
              className={
                splitLocation[2] === "receivers" ||
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
                splitLocation[2] === "topup/input"
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
                splitLocation[2] === "password" ||
                splitLocation[2] === "PIN"
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
            onClick={handleModalAlert}
            className="menu-items d-lg-flex align-items-center m-2 ms-0 me-0"
          >
            <BsIcons.BsBoxArrowInRight className="icons-size ms-4" />
            <p className="ms-4 mt-3">Log Out</p>
          </div>
        </section>

        {openModalAlert ? (
          <ModalAlert
            alertIcon={<AiIcons.AiOutlineLogout />}
            alertTitle="Log Out Account?"
            alertDesc="Are you sure you want to log out from Zwallet? Save all your changes before logout."
            action="Log Out"
            closeModal={handleModalAlert}
            handleAction={logOut}
          />
        ) : null}
      </aside>
    </Fragment>
  );
};

export default Sidebar;
