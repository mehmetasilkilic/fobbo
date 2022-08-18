import { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utils/safeArea.component";

import { PlaceInfoCard } from "../components/placeInfoCard.components";
import { Search } from "../../../components/search/search.component";
import { Loading } from "../../../components/loading/loading.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { PlacesContext } from "../../../services/places/places.context";

import { PlacesList } from "./places.styles";

export const PlacesScreen = ({ navigation }) => {
  const { places, isLoading } = useContext(PlacesContext);

  return (
    <SafeArea>
      {isLoading && <Loading />}
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
              <Spacer position="bottom" size="large">
                <PlaceInfoCard place={item} cardStyle="vertical" />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
