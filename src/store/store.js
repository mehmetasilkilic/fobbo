import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "./location/location.slice";
import placesReducer from "./places/places.slice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    places: placesReducer,
  },
});
