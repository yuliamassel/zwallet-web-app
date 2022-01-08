import React, { Fragment } from "react";
import Footer from "../../components/module/Footer";
import Sidebar from "../../components/module/Sidebar";

const Dashboard = () => {
  return (
    <Fragment>
      <h1 className="text-center">Dashboard Page</h1>
      <Sidebar />
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
