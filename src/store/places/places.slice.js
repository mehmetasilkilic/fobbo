import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import camelize from "camelize";

import { places } from "../../services";

const initialState = {
  loading: false,
  places: [],
  error: null,
};

export const fetchPlaces = createAsyncThunk("places/fetchPlaces", async () => {
  // const locationString = `${loc.lat},${loc.lng}`;
  const result = await places.getPlaceList();
  const res = camelize(result?.data?.payload?.places?.data);
  return res;
});

const placesSlice = createSlice({
  name: "places",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlaces.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      return { ...state, loading: false, places: action.payload };
    });
    builder.addCase(fetchPlaces.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
  },
});

export default placesSlice.reducer;
