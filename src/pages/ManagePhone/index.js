import React, { Fragment } from "react";
import * as FiIcons from "react-icons/fi";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import Sidebar from "../../components/module/Sidebar";
import "./managephone.css";

const ManagePhone = () => {
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row d-flex">
          <Header />

          <main className="col-12 main-content">
            <div className="big-screen-content d-none d-lg-block d-lg-flex mt-lg-2">
              <Sidebar />

              <section className="content-bar big-screen col-lg-8 animation-pull-out ">
                <section className="manage-phone-content d-flex flex-column">
                  <div className="manage-phone-text mt-2">
                    <p className="manage-phone-title">Manage Phone Number</p>
                    <p className="manage-phone-desc">
                      You can only delete the phone number and then <br /> you
                      must add another phone number.
                    </p>
                  </div>

                  <div className="primary-phone-card d-flex flex-row justify-content-between align-items-center mt-3">
                    <div>
                      <p className="primary-phone-card-title ms-1">
                        Phone Number
                      </p>
                      <p className="primary-phone-card-desc ms-1">
                        +62 8898898899
                      </p>
                    </div>
                    <FiIcons.FiTrash className="delete-phone icons-size text-grey" />
                  </div>
                </section>
              </section>
            </div>
          </main>

          <Footer />
        </div>
      </main>
    </Fragment>
  );
};

export default ManagePhone;
