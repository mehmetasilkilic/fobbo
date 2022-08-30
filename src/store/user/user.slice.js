import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { setAccessToken } from "../../utils/setAccessToken";

import { authService } from "../../services";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeError(state) {
      const removedError = null;
      return { ...state, error: removedError };
    },
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, loading: false, currentUser: action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
    // register
    builder.addCase(register.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(register.fulfilled, (state, action) => {
      return { ...state, loading: false, currentUser: action.payload };
    });
    builder.addCase(register.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
  },
});

export default userSlice.reducer;
export const { removeError } = userSlice.actions;
