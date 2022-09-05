import { createSlice } from "@reduxjs/toolkit";

import {
  fetchFavourites,
  addFavourite,
  removeFavourite,
} from "./favourites.service";

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  extraReducers: (builder) => {
    // fetch favourites
    builder.addCase(fetchFavourites.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchFavourites.fulfilled, (state, action) => {
      return { ...state, loading: false, favourites: action.payload };
    });
    builder.addCase(fetchFavourites.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
    // add favourites
    builder.addCase(addFavourite.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(addFavourite.fulfilled, (state, action) => {
      return { ...state, loading: false, favourites: action.payload };
    });
    builder.addCase(addFavourite.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
    // remove favourites
    builder.addCase(removeFavourite.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(removeFavourite.fulfilled, (state, action) => {
      return { ...state, loading: false, favourites: action.payload };
    });
    builder.addCase(removeFavourite.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
  },
});

export default favouritesSlice.reducer;
