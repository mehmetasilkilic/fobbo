import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Loading } from "../../../components/loading/loading.component";
import { SafeArea } from "../../../components/utils/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import {
  FavouritesList,
  FavouritesContainer,
  TopBar,
} from "./favourites.styles";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites, isLoading } = useContext(FavouritesContext);

  return (
    <SafeArea>
      <FavouritesContainer>
        <TopBar>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
          >
            <AntDesign name="left" size={22} color={"white"} />
          </TouchableOpacity>
          <Spacer position="left" size="medium">
            <Text variant="subTitle">Favourites</Text>
          </Spacer>
        </TopBar>
        {isLoading && <Loading />}
        <FavouritesList
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
      </FavouritesContainer>
    </SafeArea>
  );
};
