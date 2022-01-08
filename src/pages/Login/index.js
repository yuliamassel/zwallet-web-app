import React, { Fragment } from "react";
import "./login.css";
import Display from "../../components/module/Display";
import FormLogin from "../../components/module/FormLogin";

const Login = () => {
  return (
    <Fragment>
      <main className="container-fluid d-flex">
        <Display />
        <FormLogin />
      </main>
    </Fragment>
  );
};

export default Login;
