import { createSlice } from "@reduxjs/toolkit";

import { fetchPlaces, fetchTrendingPlaces } from "./places.service";

const initialState = {
  loading: false,
  placesList: [],
  trendingPlaces: [],
  message: null,
  error: null,
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    removePlaces(state) {
      const placesList = [];
      const message = null;
      return { ...state, placesList, message };
    },
  },
  extraReducers: (builder) => {
    // fetch places + filtered
    builder.addCase(fetchPlaces.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      let message;
      if (action.payload == false) {
        message = "You have reached the end of the page";
      }
      return {
        ...state,
        loading: false,
        placesList: [...state.placesList, ...action.payload],
        message,
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
