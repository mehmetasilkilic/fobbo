import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import camelize from "camelize";

import { places } from "../../services";

const initialState = {
  loading: false,
  places: [],
  trendingPlaces: [],
  error: null,
};

export const fetchPlaces = createAsyncThunk(
  "places/fetchPlaces",
  async (query) => {
    const result = await places.getPlaceList(query);
    const res = camelize(result?.data?.payload);
    return res;
  }
);

export const fetchTrendingPlaces = createAsyncThunk(
  "places/fetchTrendingPlaces",
  async (query) => {
    const result = await places.getPlaceList(query);
    const res = camelize(result?.data?.payload);
    return res;
  }
);

const placesSlice = createSlice({
  name: "places",
  initialState,
  extraReducers: (builder) => {
    // places filter
    builder.addCase(fetchPlaces.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        places: [...state.places, ...action.payload],
      };
    });
    builder.addCase(fetchPlaces.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
    // trending places
    builder.addCase(fetchTrendingPlaces.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchTrendingPlaces.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        trendingPlaces: action.payload,
      };
    });
    builder.addCase(fetchTrendingPlaces.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error };
    });
  },
});

export default placesSlice.reducer;
