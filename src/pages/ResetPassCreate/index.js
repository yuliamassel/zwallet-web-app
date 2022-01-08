import React, { Fragment } from "react";
import Display from "../../components/module/Display";
import FormCreatePassword from "../../components/module/FormCreatePass";

const ResetPassCreate = () => {
  return (
    <Fragment>
      <main className="container-fluid d-flex">
        <Display />
        <FormCreatePassword />
      </main>
    </Fragment>
  );
};

export default ResetPassCreate;
