import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import Balance from "../../../components/module/Balance";
import Chart from "../../../components/module/Charts";
import History from "../../../components/module/History";

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [userId, setUserId] = useState(() => {
    const user = localStorage.getItem("userId");
    const convertedUser = JSON.parse(user);
    return convertedUser;
  });
  const [userHeader, setUserHeader] = useState({
    userFullName: "",
    userPhone: "",
    balance: 0
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
          userPhone: `${result.phone}`,
          balance: `${result.balance}`
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
      {/* <!-- main content for lg, xl, xxl --> */}
      <section className="content-bar col-lg-8 animation-pull-out ">
        <section className="menu-content ">
          <Balance
            balance={userHeader.balance}
            user_phone={userHeader.userPhone}
          />

          <section className="row history-content d-lg-flex flex-row">
            <Chart />

            <History />
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default Dashboard;
