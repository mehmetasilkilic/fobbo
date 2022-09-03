import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { favourites } from "../../services";

const initialState = {
  favourites: [],
};

export const fetchFavourites = createAsyncThunk(
  "favourites/fetchFavourites",
  async (userId) => {
    const result = await favourites.getFavourites(userId);
    console.log("ressss", result?.data?.payload?.favorites || []);
    return result?.data?.payload?.favorites || [];
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
