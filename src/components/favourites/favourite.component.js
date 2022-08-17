import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const CardStyle = styled(TouchableOpacity)`
  position: absolute;
  top: ${(props) => props.theme.space[3]};
  right: ${(props) => props.theme.space[3]};
  z-index: 9;
`;

const DetailStyle = styled(TouchableOpacity)``;

export const Favourite = ({ place, styleVariable }) => {
  const FavouriteButton = styleVariable === "card" ? CardStyle : DetailStyle;

  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((item) => item.placeId === place.placeId);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite ? addToFavourites(place) : removeFromFavourites(place)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "white" : "white"}
      />
    </FavouriteButton>
  );
};
