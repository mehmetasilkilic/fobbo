import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/user.slice";
import favoritesReducer from "./favorites/favorites.slice";
import locationReducer from "./location/location.slice";
import placesReducer from "./places/places.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationReducer,
    places: placesReducer,
    favorites: favoritesReducer,
  },
});
