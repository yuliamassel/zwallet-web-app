import React, { Fragment } from "react";

const Button = ({ children, ...props }) => {
  return (
    <Fragment>
      <button {...props}>{children}</button>
    </Fragment>
  );
};

export default Button;
