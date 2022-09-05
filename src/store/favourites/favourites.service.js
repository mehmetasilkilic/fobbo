import { createAsyncThunk } from "@reduxjs/toolkit";

import { favourites } from "../../services";

export const fetchFavourites = createAsyncThunk(
  "favourites/fetchFavourites",
  async (userId) => {
    const result = await favourites.getFavourites(userId);
    return result.data.payload[0].favorites;
  }
);

export const addFavourite = createAsyncThunk(
  "favourites/addFavourite",
  async (placeId) => {
    const result = await favourites.addToFavourites(placeId);
    return result?.data?.payload;
  }
);

export const removeFavourite = createAsyncThunk(
  "favourites/removeFavourite",
  async (placeId) => {
    const result = await favourites.removeFromFavourites(placeId);
    return result?.data?.payload;
  }
);
