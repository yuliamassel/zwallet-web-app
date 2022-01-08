import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Transaction from "./pages/Transaction";
import Receiver from "./pages/Receiver";
import Transfer from "./pages/Transfer";
import Profile from "./pages/Profile";
import Page404 from "./pages/404";
import TransferConfirm from "./pages/TransferConfirm";
import TransferStatus from "./pages/TransferStatus";
import ResetPassConfirm from "./pages/ResetPassConfirm";
import ResetPassCreate from "./pages/ResetPassCreate";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/reset-password"} element={<ResetPassConfirm />} />
          <Route path={"/create-new-password"} element={<ResetPassCreate />} />
          <Route path={"/history"} element={<Transaction />} />
          <Route path={"/receiver"} element={<Receiver />} />
          <Route path={"/transfer"} element={<Transfer />} />
          <Route
            path={"/transfer-confirmation"}
            element={<TransferConfirm />}
          />
          <Route path={"/transfer-status"} element={<TransferStatus />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
