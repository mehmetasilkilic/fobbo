import { createSlice } from "@reduxjs/toolkit";

import {
  fetchFavorites,
  addFavorite,
  removeFavorite,
} from "./favorites.service";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  extraReducers: (builder) => {
    // fetch favorites
    builder.addCase(fetchFavorites.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      return { ...state, loading: false, favorites: action.payload };
    });
    builder.addCase(fetchFavorites.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
    // add favorites
    builder.addCase(addFavorite.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      return { ...state, loading: false, favorites: action.payload };
    });
    builder.addCase(addFavorite.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
    // remove favorites
    builder.addCase(removeFavorite.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(removeFavorite.fulfilled, (state, action) => {
      return { ...state, loading: false, favorites: action.payload };
    });
    builder.addCase(removeFavorite.rejected, (state, action) => {
      return { ...state, loading: false, error: action.payload };
    });
  },
});

export default favoritesSlice.reducer;
