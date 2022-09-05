import { createAsyncThunk } from "@reduxjs/toolkit";
import camelize from "camelize";

import { places } from "../../services";

export const fetchPlaces = createAsyncThunk(
  "places/fetchPlaces",
  async (query) => {
    const result = await places.getPlaceList(query);
    const res = camelize(result?.data?.payload);
    return res;
  }
);

export const fetchTrendingPlaces = createAsyncThunk(
  "places/fetchTrendingPlaces",
  async (query) => {
    const result = await places.getPlaceList(query);
    const res = camelize(result?.data?.payload);
    return res;
  }
);

// transformer
export const placesTransform = ({ results = [] }) => {
  const mappedResults = results.map((place) => {
    return {
      ...place,
      address: place.vicinity,
      isOpenNow: place.opening_hours && place.opening_hours.open_now,
      isClosedTemporarily: place.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
