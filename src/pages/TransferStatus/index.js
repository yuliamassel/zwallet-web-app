import React, { Fragment } from "react";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";

const TransferStatus = () => {
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />
            </div>
          </main>

          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default TransferStatus;
