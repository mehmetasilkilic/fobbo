import { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utils/safeArea.component";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Search } from "../../../components/search/search.component";
import { Loading } from "../../../components/loading/loading.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { PlacesList } from "./favourites.styles";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites, isLoading } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isLoading && <Loading />}
      <Search />
      <PlacesList
        numColumns={2}
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PlaceDetail", {
                  place: item,
                })
              }
            >
              <Spacer position="bottom" size="medium">
                <PlaceInfoCard place={item} cardStyle="small" />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      <Spacer position="bottom" size="extraLarge" />
    </SafeArea>
  );
};
