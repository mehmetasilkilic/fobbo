import { useState, createContext, useEffect, useMemo } from "react";

import { placesRequest, placesTransform } from "./places.service";

export const PlacesContext = createContext();

export const PlacesContextProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrievePlaces = () => {
    setIsLoading(true);
    setTimeout(() => {
      placesRequest()
        .then(placesTransform)
        .then((res) => {
          setPlaces(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    retrievePlaces();
  }, []);

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
