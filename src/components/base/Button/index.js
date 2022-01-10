import React, { Fragment } from "react";

const Button = ({ isLoading, children, ...props }) => {
  return (
    <Fragment>
      <button disabled={isLoading ? true : false} {...props}>
        {isLoading ? "Loading..." : children}
      </button>
    </Fragment>
  );
};

export default Button;
