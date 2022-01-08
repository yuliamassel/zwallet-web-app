import React, { Fragment } from "react";
import Display from "../../components/module/Display";
import FormConfirmEmail from "../../components/module/FormConfirmEmail";

const ResetPassConfirm = () => {
  return (
    <Fragment>
      <main className="container-fluid d-flex">
        <Display />
        <FormConfirmEmail />
      </main>
    </Fragment>
  );
};

export default ResetPassConfirm;
