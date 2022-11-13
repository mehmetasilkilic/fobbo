import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/user.slice";
import favoritesReducer from "./favorites/favorites.slice";
import locationReducer from "./location/location.slice";
import placesReducer from "./places/places.slice";
import i18nReducer from "./i18n/i18n.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationReducer,
    places: placesReducer,
    favorites: favoritesReducer,
    i18n: i18nReducer,
  },
});
