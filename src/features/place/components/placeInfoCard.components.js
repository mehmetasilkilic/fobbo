import styled from "styled-components";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

const PlaceCard = styled(Card)`
  backgroundcolor: "white";
`;

const PlaceCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: "white";
`;

export const PlaceInfoCard = ({ place = {} }) => {
  const {
    name = "Pardi",
    icon = ["cafe", "restaurant"],
    photos = [
      "https://b.zmtcdn.com/data/pictures/9/18208549/318364ae4f19038b81e3ac5444cfd306.jpg",
      "https://b.zmtcdn.com/data/pictures/9/18208549/bd9fc1778662e80d37fcde9b869be9d0.jpg",
    ],
    address = "Ataköy",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = place;
  return (
    <PlaceCard elevation={5}>
      <PlaceCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </PlaceCard>
  );
};
