import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { placesRequest, placesTransform } from "./places.service";

import { places } from "../../services";

const initialState = {
  loading: false,
  places: [],
  error: "",
};

export const fetchPlaces = createAsyncThunk("places/fetchPlaces", async () => {
  // const locationString = `${loc.lat},${loc.lng}`;
  const result = await places.getPlaceList();
  // const res = await placesTransform(result);
  return result?.data?.payload?.places?.data;
});

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
