import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import {
  addFavourite,
  removeFavourite,
} from "../../store/favourites/favourites.service";

const CardStyle = styled(TouchableOpacity)`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  right: ${(props) => props.theme.space[2]};
  z-index: 9;
`;

const DetailStyle = styled(TouchableOpacity)``;

export const Favourite = ({ place, styleVariable }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  const FavouriteButton = styleVariable === "card" ? CardStyle : DetailStyle;
  const isFavourite = favourites.find((item) => item.id === place.id);

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? dispatch(addFavourite(place.id))
          : dispatch(removeFavourite(place.id))
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color="white"
      />
    </FavouriteButton>
  );
};
