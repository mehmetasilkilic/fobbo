import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAccessToken } from "../../utils/setAccessToken";

import { authService } from "../../services";

export const login = createAsyncThunk(
  "user/login",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await authService.login(formData);
      const response = res.data;
      setAccessToken(response);
      return response?.payload?.user;
    } catch (e) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await authService.register(formData);
      const response = res.data;
      setAccessToken(response);
      return response?.payload?.user;
    } catch (e) {
      throw rejectWithValue(e.response.data.message);
    }
  }
);
