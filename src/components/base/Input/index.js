import React, { Fragment } from "react";

const Input = ({ label, ...props }) => {
  return (
    <Fragment>
      {label && <label className="form-label">{label}</label>}
      <input {...props} />
    </Fragment>
  );
};

export default Input;
