import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { favorites } from "../../services";

const initialState = {
  favorites: [],
};

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async (userId) => {
    const result = await favorites.getFavorites(userId);
    return result.data.payload[0].favorites;
  }
);

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (placeId) => {
    const result = await favorites.addToFavorites(placeId);
    return result?.data?.payload;
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async (placeId) => {
    const result = await favorites.removeFromFavorites(placeId);
    return result?.data?.payload;
  }
);

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
