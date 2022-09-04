import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { fetchFavourites } from "../../../store/favourites/favourites.slice";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Loading } from "../../../components/loading/loading.component";
import { SafeArea } from "../../../components/utils/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  FavouritesList,
  FavouritesContainer,
  TopBar,
  Row,
} from "./favourites.styles";

export const FavouritesScreen = ({ navigation }) => {
  const [toggleAppearance, setToggleAppearance] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const favourites = useSelector((state) => state.favourites.favourites);
  const isLoading = false;

  useEffect(() => {
    dispatch(fetchFavourites(user.id));
  }, []);

  return (
    <SafeArea>
      <FavouritesContainer>
        <TopBar>
          <Row>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}
            >
              <AntDesign name="left" size={24} color={"#262626"} />
            </TouchableOpacity>
            <Spacer position="left" size="medium">
              <Text variant="titleBlackSmall">Favourites</Text>
            </Spacer>
          </Row>
          <Row>
            <Spacer position="right" size="medium">
              <Text variant="caption">Appearance</Text>
            </Spacer>
            <TouchableOpacity
              onPress={() => {
                setToggleAppearance(!toggleAppearance);
              }}
            >
              <AntDesign
                name={toggleAppearance ? "appstore-o" : "laptop"}
                size={24}
                color={"#262626"}
              />
            </TouchableOpacity>
          </Row>
        </TopBar>
        {isLoading && <Loading color="#f00062" />}
        <FavouritesList
          numColumns={toggleAppearance ? 1 : 2}
          key={toggleAppearance ? 1 : 2}
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
                  <PlaceInfoCard
                    place={item}
                    cardStyle={toggleAppearance ? "vertical" : "small"}
                  />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
        <Spacer position="bottom" size="large" />
      </FavouritesContainer>
    </SafeArea>
  );
};
