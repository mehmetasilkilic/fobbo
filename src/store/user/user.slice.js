import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { login, register, loginOrRegister } from "./user.service";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeError(state) {
      const error = null;
      return { ...state, error };
    },
    logout(state) {
      const removeAccessToken = async () => {
        try {
          await AsyncStorage.removeItem("accessToken");
        } catch (e) {
          // remove error
        }
      };
      removeAccessToken();
      const currentUser = null;
      return { ...state, currentUser };
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
    // login or register with facebook
    builder.addCase(loginOrRegister.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(loginOrRegister.fulfilled, (state, action) => {
      return { ...state, loading: false, currentUser: action.payload };
    });
    builder.addCase(loginOrRegister.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
  },
});

export default userSlice.reducer;
export const { removeError, logout } = userSlice.actions;
