import { combineReducers } from "redux";

// import reducers
import AuthLogin from "./auth/authLogin";
import AuthSignUp from "./auth/authSignUp";
import AuthCreatePIN from "./auth/authCreatePIN";
import GetReceivers from "./apps/getReceivers";
import SearchReceiver from "./apps/searchReceiver";

// combine all reducers into rootReducers
const rootReducers = combineReducers({
  AuthLogin,
  AuthSignUp,
  AuthCreatePIN,
  GetReceivers,
  SearchReceiver
});

export default rootReducers;
