import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import camelize from "camelize";

import { places } from "../../services";

const initialState = {
  loading: false,
  placesList: [],
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
  reducers: {
    removePlaces(state) {
      const placesList = [];
      return { ...state, placesList };
    },
  },
  extraReducers: (builder) => {
    // places filter
    builder.addCase(fetchPlaces.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        placesList: [...state.placesList, ...action.payload],
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
export const { removePlaces } = placesSlice.actions;
