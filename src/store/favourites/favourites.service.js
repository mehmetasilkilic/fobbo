import { createAsyncThunk } from "@reduxjs/toolkit";

import { favorites } from "../../services";

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
