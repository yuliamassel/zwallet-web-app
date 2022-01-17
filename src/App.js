import React, { Fragment } from "react";
import Router from "./config/Router";
import UserProvider from "./context/UserContext";

const App = () => {
  return (
    <Fragment>
      <UserProvider>
        <Router />
      </UserProvider>
    </Fragment>
  );
};

export default App;
