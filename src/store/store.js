import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/user.slice";
import favouritesReducer from "./favourites/favourites.slice";
import locationReducer from "./location/location.slice";
import placesReducer from "./places/places.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationReducer,
    places: placesReducer,
    favourites: favouritesReducer,
  },
});
