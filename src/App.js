import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import ResetPassConfirm from "./pages/Auth/ResetPassConfirm";
import ResetPassCreate from "./pages/Auth/ResetPassCreate";
import CreatePIN from "./pages/Auth/CreatePIN";

import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Receiver from "./pages/Receiver";
import Transfer from "./pages/Transfer";
import Profile from "./pages/Profile";
import Page404 from "./pages/404";
import TransferConfirm from "./pages/TransferConfirm";
import TransferStatus from "./pages/TransferStatus";
import TopUp from "./pages/TopUp";
// import RequireAuth from "./components/base/RequireAuth";
import PersonalInfo from "./pages/PersonalInfo";
import ChangePassword from "./pages/ChangePassword";
import ChangePIN from "./pages/ChangePIN";
import NewPhone from "./pages/NewPhone";
import ManagePhone from "./pages/ManagePhone";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={"/auth"} element={<Auth />}>
            <Route path={"login"} element={<Login />} />
            <Route path={"signup"} element={<SignUp />} />
            <Route path={"create-pin"} element={<CreatePIN />} />
            <Route path={"reset-password"} element={<ResetPassConfirm />} />
            <Route path={"create-password"} element={<ResetPassCreate />} />
            <Route index element={<Navigate to="/auth/login" />} />
          </Route>

          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/history"} element={<Transaction />} />
          <Route path={"/topup"} element={<TopUp />} />
          <Route path={"/receiver"} element={<Receiver />} />
          <Route path={"/transfer"} element={<Transfer />} />
          <Route
            path={"/transfer-confirmation"}
            element={<TransferConfirm />}
          />
          <Route path={"/transfer-status"} element={<TransferStatus />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/personal-information"} element={<PersonalInfo />} />
          <Route path={"/change-password"} element={<ChangePassword />} />
          <Route path={"/change-PIN"} element={<ChangePIN />} />
          <Route path={"/new-phone"} element={<NewPhone />} />
          <Route path={"/manage-phone"} element={<ManagePhone />} />
          <Route path={"/*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
