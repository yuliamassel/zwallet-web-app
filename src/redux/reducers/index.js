import { combineReducers } from "redux";

// import reducers
import AuthLogin from "./auth/authLogin";
import GetReceivers from "./apps/getReceivers";
import SearchReceiver from "./apps/searchReceiver";

// combine all reducers into rootReducers
const rootReducers = combineReducers({
  AuthLogin,
  GetReceivers,
  SearchReceiver
});

export default rootReducers;
