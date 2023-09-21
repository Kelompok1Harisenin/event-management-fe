import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import popupReducer from './slices/paymentPopup';

const reducer = combineReducers({
  auth: authSlice,
  popup: popupReducer,
});

export default reducer;
