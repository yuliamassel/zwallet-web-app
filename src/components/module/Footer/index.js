import React, { Fragment } from "react";
import "./footer.css";

const Footer = () => {
  return (
    <Fragment>
      <footer className="col-md-12 footer-content d-none d-md-block d-md-flex flex-row justify-content-between mb-0">
        <p className="copyright">2020 Zwallet. All right reserved.</p>
        <div className="contact d-md-flex flex-row">
          <p>+62 5637 8882 9901</p>
          <p>contact@zwallet.com</p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
