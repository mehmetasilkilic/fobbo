import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "react-native-paper";

import { PlacesContext } from "../../../services/places/places.context";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { PlaceInfoCard } from "../components/placeInfoCard.components";
import { Search } from "../components/search.component";

import { PlacesList, LoadingContainer, Loading } from "./places.styles";

export const PlacesScreen = ({ navigation }) => {
  const { places, isLoading } = useContext(PlacesContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer style={{}}>
          <Loading size={50} animating={true} color={Colors.red300} />
        </LoadingContainer>
      )}
      <Search />
      <PlacesList
        data={places}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlaceDetail", {
                  place: item,
                })
              }
            >
              <PlaceInfoCard place={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
