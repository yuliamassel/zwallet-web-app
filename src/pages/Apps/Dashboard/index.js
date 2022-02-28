import React, { Fragment, useEffect } from "react";
import "./dashboard.css";
import Balance from "../../../components/module/Balance";
import Chart from "../../../components/module/Charts";
import History from "../../../components/module/History";

// redux
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../../../redux/actions/apps/getProfile";

const Dashboard = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.GetProfile);
  const profile = profileData.data;

  useEffect(() => {
    dispatch(GetProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {/* <!-- main content for lg, xl, xxl --> */}
      <section className="content-bar col-lg-8 animation-pull-out ">
        <section className="menu-content ">
          <Balance
            balance={profile.balance}
            user_phone={
              profile.phone ? `+62 ${profile.phone}` : "+ Add phone number"
            }
          />

          <section className="row history-content d-lg-flex flex-row">
            <Chart income={profile.income} expense={profile.expense} />

            <History />
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default Dashboard;
