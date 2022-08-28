import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const placesRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const placesTransform = ({ results = [] }) => {
  const mappedResults = results.map((place) => {
    place.photos = place.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...place,
      address: place.vicinity,
      isOpenNow: place.opening_hours && place.opening_hours.open_now,
      isClosedTemporarily: place.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};