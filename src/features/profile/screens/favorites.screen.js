import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { fetchFavorites } from "../../../store/favorites/favorites.slice";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Loading } from "../../../components/loading/loading.component";
import { SafeAreaSecond } from "../../../components/utils/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { PlaceModal } from "../../../components/placeModal/placeModal.component";

import {
  FavoritesList,
  FavoritesContainer,
  TopBar,
  Row,
} from "./favorites.styles";

export const FavoritesScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const favorites = useSelector((state) => state.favorites.favorites);
  const isLoading = false;

  const [toggleAppearance, setToggleAppearance] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    dispatch(fetchFavorites(user.id));
  }, []);

  const openModal = (placeData) => {
    setVisible(true);
    setModalData(placeData);
  };

  return (
    <>
      <SafeAreaSecond>
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
              <Text variant="titleBlackSmall">Favorites</Text>
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
      </SafeAreaSecond>
      <FavoritesContainer>
        <FavoritesList
          numColumns={toggleAppearance ? 1 : 2}
          key={toggleAppearance ? 1 : 2}
          data={favorites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => openModal(item)}>
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
      </FavoritesContainer>
      <PlaceModal
        closeModal={() => setVisible(false)}
        visible={visible}
        data={modalData}
      />
    </>
  );
};
