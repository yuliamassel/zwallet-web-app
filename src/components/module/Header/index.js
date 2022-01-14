import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import * as BsIcons from "react-icons/bs";
import img from "../../../assets/img/blank-profile-picture.png";
import "./header.css";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useState(() => {
    const user = localStorage.getItem("userId");
    const convertedUser = JSON.parse(user);
    return convertedUser;
  });
  const [userHeader, setUserHeader] = useState({
    userFullName: "",
    userPhone: ""
  });
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/details/${userId}`, {
        headers: { auth: "admin" }
      })
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        setUserHeader({
          userFullName: `${result.first_name} ${result.last_name}`,
          userPhone: `${result.phone}`
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <header className="col-12 header-content d-flex flex-column">
        {/* <!-- status bar xs, sm version --> */}
        <div className="status-bars d-flex justify-content-between mb-3 d-md-none">
          <img src="src/timestyle.svg" alt="Time" />
          <img src="src/status-bars.svg" alt="Bars" />
        </div>
        {/* <!-- status bar md version --> */}
        <div className="status-bars d-md-flex justify-content-md-between mb-3 d-none d-md-block d-lg-none">
          <img src="src/timestyle-black.svg" alt="Time" />
          <img src="src/status-bars-black.svg" alt="Bars" />
        </div>

        <nav className="nav-bar d-flex flex-row justify-content-between mb-4 mb-lg-1">
          {/* <!-- header content for xs, sm --> */}
          <img
            className="ms-2 d-md-none d-lg-none"
            src="src/robert.svg"
            alt="Robert"
          />
          <div className="saldo d-md-none d-lg-none">
            <p className="saldo-text mb-0 mt-3">Balance</p>
            <p className="saldo-nominal">Rp120.000</p>
          </div>
          <BsIcons.BsBell className="d-md-none icons-size text-white mt-4 me-2" />

          {/* <!-- header content for md, lg, xl, xxl --> */}
          <h2 className="logo text-blue d-none d-md-block mt-3">Zwallet</h2>

          <div className="user-profile d-md-flex flex-row d-none d-md-block">
            <img
              className="ms-2 me-4 user-pic"
              src={img}
              alt="Robert"
              height="53px"
            />
            <div className="user-profile-name me-4">
              <p className="name mb-0">{userHeader.userFullName}</p>
              <p className="phone mb-0">+62 {userHeader.userPhone}</p>
            </div>
            <BsIcons.BsBell className="notif icons-size mt-3" />
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
