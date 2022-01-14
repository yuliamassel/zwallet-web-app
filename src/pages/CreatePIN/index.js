import React, { Fragment } from "react";
import Display from "../../components/module/Display";
import FormLogin from "../../components/module/FormLogin";

const CreatePIN = () => {
  return (
    <Fragment>
      <main className="container-fluid d-flex">
        <Display />
        <FormLogin />
      </main>
    </Fragment>
  );
};

export default CreatePIN;
