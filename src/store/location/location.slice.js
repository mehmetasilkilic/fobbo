import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { locationRequest, locationTransform } from "./location.service";

const initialState = {
  loading: false,
  keyword: "San Francisco",
  location: null,
  error: "",
};

export const fetchLocation = createAsyncThunk(
  "location/fetchLocation",
  async (loc) => {
    const result = await locationRequest(loc.toLowerCase());
    const res = await locationTransform(result);
    return res;
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setKeyword(state, action) {
      const keyword = action.payload;
      return { ...state, keyword };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocation.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchLocation.fulfilled, (state, action) => {
      return { ...state, loading: false, location: action.payload, error: "" };
    });
    builder.addCase(fetchLocation.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
  },
});

export default locationSlice.reducer;
export const { setKeyword } = locationSlice.actions;
