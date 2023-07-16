import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      const data = action.payload.response;
      state.loading = false;
      state.user = data.user;
      state.accessToken = data.tokens.access.token;
      state.refreshToken = data.tokens.refresh.token;
      state.isLoggedIn = true;

      Cookies.set("user", JSON.stringify(state.user));
      Cookies.set("accessToken", JSON.stringify(state.accessToken));
      Cookies.set("refreshToken", JSON.stringify(state.refreshToken));
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      Cookies.remove("user");
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      state.isLoggedIn = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice;
