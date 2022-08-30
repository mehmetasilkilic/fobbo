import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { setAccessToken } from "../../utils/setAccessToken";

import { authService } from "../../services";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk("user/login", async (formData) => {
  const res = await authService.login({
    email: formData.email,
    password: formData.password,
    device_name: "iphone11",
  });
  const response = res.data;
  setAccessToken(response);
  return response?.payload?.user;
});

export const register = createAsyncThunk("user/register", async (formData) => {
  const res = await authService.register({
    name: formData.name,
    email: formData.email,
    password: formData.password,
    device_name: "iphone11",
  });
  const response = res.data;
  setAccessToken(response);
  return response?.payload?.user;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("fulfilled");
      return { ...state, loading: false, currentUser: action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log("rejected");
      return { ...state, loading: false, error: action.error };
    });
    // register
    builder.addCase(register.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(register.fulfilled, (state, action) => {
      return { ...state, loading: false, currentUser: action.payload };
    });
    builder.addCase(register.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
  },
});

export default userSlice.reducer;
