import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite(state, action) {
      const favourites = [...state.favourites, action.payload];
      return { ...state, favourites };
    },
    removeFavourite(state, action) {
      const favourites = state.favourites.filter(
        (item) => item.placeId !== action.payload.placeId
      );
      return { ...state, favourites };
    },
  },
});

export default favouritesSlice.reducer;
export const { addFavourite, removeFavourite } = favouritesSlice.actions;
