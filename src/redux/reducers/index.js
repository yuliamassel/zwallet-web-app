import { combineReducers } from "redux";

// import reducers
import AuthLogin from "./auth/authLogin";
import AuthSignUp from "./auth/authSignUp";
import AuthCreatePIN from "./auth/authCreatePIN";
import GetProfile from "./apps/getProfile";
import GetReceivers from "./apps/getReceivers";
import SearchReceiver from "./apps/searchReceiver";
import PINConfirmation from "./apps/PINConfirmation";
import NewPassword from "./apps/changePassword";
import PINConfirm from "./apps/PINConfirm";
import NewPin from "./apps/changePIN";
import NewPhoneNumber from "./apps/addPhoneNumber";
import DeletePhoneNumber from "./apps/deletePhoneNumber";

// combine all reducers into rootReducers
const rootReducers = combineReducers({
  AuthLogin,
  AuthSignUp,
  AuthCreatePIN,
  GetProfile,
  GetReceivers,
  SearchReceiver,
  PINConfirmation,
  NewPassword,
  PINConfirm,
  NewPin,
  NewPhoneNumber,
  DeletePhoneNumber
});

export default rootReducers;
