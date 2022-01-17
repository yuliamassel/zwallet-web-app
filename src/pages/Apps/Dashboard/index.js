import React, { Fragment, useContext, useEffect, useState } from "react";
// import axios from "axios";
import "./dashboard.css";
import Balance from "../../../components/module/Balance";
import Chart from "../../../components/module/Charts";
import History from "../../../components/module/History";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(UserContext);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const userId = JSON.parse(localStorage.getItem("userId"));
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_ZWALLET_API}/users/details/${userId}`, {
        headers: { auth: "admin" }
      })
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        setUser(result);
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
          <Balance balance={user.balance} user_phone={user.phone} />

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
