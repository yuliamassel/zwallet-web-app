import React, { Fragment } from "react";
import Display from "../../components/module/Display";
import FormSignUp from "../../components/module/FormSignUp";

const SignUp = () => {
  return (
    <Fragment>
      <main className="container-fluid d-flex">
        <Display />
        <FormSignUp />
      </main>
    </Fragment>
  );
};

export default SignUp;
