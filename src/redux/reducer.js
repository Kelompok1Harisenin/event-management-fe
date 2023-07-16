import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const reducer = combineReducers({
  auth: authSlice.reducer,
});

export default reducer;
