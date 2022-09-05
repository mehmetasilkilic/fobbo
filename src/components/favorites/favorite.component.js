import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import {
  addFavorite,
  removeFavorite,
} from "../../store/favorites/favorites.slice";

const CardStyle = styled(TouchableOpacity)`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  right: ${(props) => props.theme.space[2]};
  z-index: 9;
`;

const DetailStyle = styled(TouchableOpacity)``;

export const Favorite = ({ place, styleVariable }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const FavoriteButton = styleVariable === "card" ? CardStyle : DetailStyle;
  const isFavorite = favorites.find((item) => item.id === place.id);

  return (
    <FavoriteButton
      onPress={() =>
        !isFavorite
          ? dispatch(addFavorite(place.id))
          : dispatch(removeFavorite(place.id))
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color="white"
      />
    </FavoriteButton>
  );
};
