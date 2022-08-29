import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { authService } from "../../services";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const setAccessToken = async (value) => {
  try {
    await AsyncStorage.setItem(
      "accessToken",
      value?.payload?.access_token ?? null
    );
  } catch (e) {
    // save error
  }
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
  console.log("formData", formData);

  const res = await authService.register({
    name: formData.name,
    email: formData.email,
    password: formData.password,
    device_name: "iphone11",
  });
  const response = res.data;
  setAccessToken(response);
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
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: "",
      };
    });
    builder.addCase(login.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
    // register
    builder.addCase(register.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(register.fulfilled, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
    builder.addCase(register.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
  },
});

export default userSlice.reducer;
