import { useState, createContext, useEffect, useContext } from "react";

import { placesRequest, placesTransform } from "./places.service";

import { LocationContext } from "../location/location.context";

export const PlacesContext = createContext();

export const PlacesContextProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrievePlaces = (loc) => {
    setIsLoading(true);
    setPlaces([]);

    setTimeout(() => {
      placesRequest(loc)
        .then(placesTransform)
        .then((res) => {
          setPlaces(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrievePlaces(locationString);
    }
  }, [location]);

  return (
    <PlacesContext.Provider
      value={{
        places,
        isLoading,
        error,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
