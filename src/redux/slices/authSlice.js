import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./../../services";

export const loginUser = createAsyncThunk("auth/login", async (data) => {
  const response = await authService.login(data);
  if (response.statusCode >= 400) {
    const errorMessage = response.error || "An error occurred during login.";
    throw new Error(errorMessage);
  }
  return response.data;
});

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (refreshToken) => {
    const response = await authService.logout(refreshToken);
    if (response.statusCode >= 400) {
      const errorMessage = response.error || "An error occurred during logout.";
      throw new Error(errorMessage);
    }
    return response.data;
  }
);

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message;
      });
  },
});

export default authSlice.reducer;
