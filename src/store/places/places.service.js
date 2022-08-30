import camelize from "camelize";

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
