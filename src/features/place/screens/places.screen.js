import { useContext } from "react";
import { Searchbar, Colors } from "react-native-paper";

import { PlaceInfoCard } from "../components/placeInfoCard.components";

import { PlacesContext } from "../../../services/places/places.context";

import { SafeArea } from "../../../components/utility/safeArea.component";
import {
  SearchContainer,
  PlacesList,
  LoadingContainer,
  Loading,
} from "./places.styles";

export const PlacesScreen = () => {
  const { places, isLoading, error } = useContext(PlacesContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer style={{}}>
          <Loading size={50} animating={true} color={Colors.red300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <PlacesList
        data={places}
        renderItem={({ item }) => {
          return <PlaceInfoCard place={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
