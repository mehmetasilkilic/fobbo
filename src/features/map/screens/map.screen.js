import { useState, useEffect, useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";
import { PlacesContext } from "../../../services/places/places.context";

import { Search } from "../components/search.component";
import { MapCallout } from "../components/mapCallout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { places = [] } = useContext(PlacesContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const newLatDelta = northeastLat - southwestLat;
    setLatDelta(newLatDelta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {places.map((place) => {
          return (
            <MapView.Marker
              key={place.name}
              title={place.name}
              coordinate={{
                latitude: place.geometry.location.lat,
                longitude: place.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() => navigation.navigate("PlaceDetail", { place })}
              >
                <MapCallout place={place} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
