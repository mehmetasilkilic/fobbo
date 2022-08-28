import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { placesRequest, placesTransform } from "./places.service";

const initialState = {
  loading: false,
  places: [],
  error: "",
};

export const fetchPlaces = createAsyncThunk(
  "places/fetchPlaces",
  async (loc) => {
    const locationString = `${loc.lat},${loc.lng}`;
    const result = await placesRequest(locationString);
    const res = await placesTransform(result);
    return res;
  }
);

const placesSlice = createSlice({
  name: "places",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlaces.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      return { ...state, loading: false, places: action.payload, error: "" };
    });
    builder.addCase(fetchPlaces.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
  },
});

export default placesSlice.reducer;