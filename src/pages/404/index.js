import React, { Fragment } from "react";
import img from "../../assets/img/404.jpg";
import "./404.css";

const Page404 = () => {
  return (
    <Fragment>
      <div className="page-not-found-wrapper d-flex flex-column justify-content-center align-items-center">
        <div className="page-not-found-text mt-3">
          <h1 className="page-status text-center">404</h1>
          <h3 className="text-center">Page Not Found</h3>
        </div>
        <img src={img} className="img-not-found" alt="404" width="800px" />
      </div>
    </Fragment>
  );
};

export default Page404;
