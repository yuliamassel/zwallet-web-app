import { combineReducers } from "redux";

// import reducers
import { GetReceivers, SearchReceiver } from "./users";

const rootReducers = combineReducers({
  GetReceivers,
  SearchReceiver
});

export default rootReducers;
