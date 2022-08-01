import styled from "styled-components";
import { Card } from "react-native-paper";

const PlaceCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const PlaceCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
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
