import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Auth from "../pages/Auth";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";
import ResetPassConfirm from "../pages/Auth/ResetPassConfirm";
import ResetPassCreate from "../pages/Auth/ResetPassCreate";
import CreatePIN from "../pages/Auth/CreatePIN";

import Apps from "../pages/Apps";
import Dashboard from "../pages/Apps/Dashboard";
import Transaction from "../pages/Apps/Transaction";
import Receiver from "../pages/Apps/Receiver";
import TopUp from "../pages/Apps/TopUp";
import Profile from "../pages/Apps/Profile";
import Transfer from "../pages/Apps/Transfer";
import TransferConfirm from "../pages/Apps/TransferConfirm";
import TransferStatus from "../pages/Apps/TransferStatus";
import PersonalInfo from "../pages/Apps/PersonalInfo";
import ChangePassword from "../pages/Apps/ChangePassword";
import ChangePIN from "../pages/Apps/ChangePIN";
import NewPhone from "../pages/Apps/NewPhone";
import ManagePhone from "../pages/Apps/ManagePhone";
import Page404 from "../pages/404";
import TopUpInput from "../pages/Apps/TopUpInput";
import NewPIN from "../pages/Apps/ChangePIN/NewPIN";
// import RequireAuth from "./components/base/RequireAuth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/apps" />} />
        <Route path={"/auth"} element={<Auth />}>
          <Route path={"login"} element={<Login />} />
          <Route path={"signup"} element={<SignUp />} />
          <Route path={"create-pin"} element={<CreatePIN />} />
          <Route path={"reset-password"} element={<ResetPassConfirm />} />
          <Route path={"create-password"} element={<ResetPassCreate />} />
          <Route index element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path={"/apps"} element={<Apps />}>
          <Route index element={<Dashboard />} />
          <Route path={"history"} element={<Transaction />} />
          <Route path={"topup"} element={<TopUp />} />
          <Route path={"topup-input"} element={<TopUpInput />} />
          <Route path={"receiver"} element={<Receiver />} />
          <Route path={"transfer/:id"} element={<Transfer />} />
          <Route path={"confirmation"} element={<TransferConfirm />} />
          <Route path={"status"} element={<TransferStatus />} />
          <Route path={"profile"} element={<Profile />} />
          <Route path={"personal-information"} element={<PersonalInfo />} />
          <Route path={"change-password"} element={<ChangePassword />} />
          <Route path={"change-PIN"} element={<ChangePIN />} />
          <Route path={"new-PIN"} element={<NewPIN />} />
          <Route path={"new-phone"} element={<NewPhone />} />
          <Route path={"manage-phone"} element={<ManagePhone />} />
        </Route>

        <Route path={"/*"} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
