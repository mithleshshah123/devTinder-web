import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionsReducer from "./connectionsSlice";
import requestsReducer from "./requestsSlice";

const appReducer = combineReducers({
  user: userReducer,
  feed: feedReducer,
  connections: connectionsReducer,
  requests: requestsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    localStorage.removeItem("user"); // clear persisted user
    state = {
      user: null,
      feed: undefined,
      connections: undefined,
      requests: undefined,
    };
  }
  return appReducer(state, action);
};

const appStore = configureStore({
  reducer: rootReducer,
});

export default appStore;
