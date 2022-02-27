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
import ProfilePicture from "../pages/Apps/ProfilePicture";
import SignUpSuccess from "../pages/Auth/SignUpSuccess";
import CreatePINSuccess from "../pages/Auth/CreatePINSuccess";
// import RequireAuth from "./components/base/RequireAuth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/apps" />} />
        <Route path={"/auth"} element={<Auth />}>
          <Route path={"login"} element={<Login />} />
          <Route path={"signup"} element={<SignUp />} />
          <Route path={"signup/success"} element={<SignUpSuccess />} />
          <Route path={"PIN"} element={<CreatePIN />} />
          <Route path={"PIN/success"} element={<CreatePINSuccess />} />
          <Route
            path={"password/confirmation"}
            element={<ResetPassConfirm />}
          />
          <Route path={"password/new"} element={<ResetPassCreate />} />
          <Route index element={<Navigate to="/auth/login" />} />
        </Route>

        <Route path={"/apps"} element={<Apps />}>
          <Route index element={<Dashboard />} />
          <Route path={"history"} element={<Transaction />} />
          <Route path={"topup"} element={<TopUp />} />
          <Route path={"topup/input"} element={<TopUpInput />} />
          <Route path={"receivers"} element={<Receiver />} />
          <Route path={"transfer/:id"} element={<Transfer />} />
          <Route path={"confirmation/:id"} element={<TransferConfirm />} />
          <Route path={"status/:id"} element={<TransferStatus />} />
          <Route path={"profile"} element={<Profile />} />
          <Route path={"profile/picture"} element={<ProfilePicture />} />
          <Route path={"profile/information"} element={<PersonalInfo />} />
          <Route path={"profile/phone/new"} element={<NewPhone />} />
          <Route path={"profile/phone"} element={<ManagePhone />} />
          <Route path={"password/change"} element={<ChangePassword />} />
          <Route path={"PIN/change"} element={<ChangePIN />} />
          <Route path={"PIN/new"} element={<NewPIN />} />
        </Route>

        <Route path={"/*"} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
