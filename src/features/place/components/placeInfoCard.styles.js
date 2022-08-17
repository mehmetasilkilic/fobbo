import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const screenWidthHorizontal =
  Math.floor(Dimensions.get("window").width) -
  Math.floor(Dimensions.get("window").width) / 5;

export const PlaceCardHorizontal = styled(Card)`
  width: ${screenWidthHorizontal}px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  overflow: hidden;
`;

export const PlaceCardVertical = styled(Card)`
  height: 300px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  overflow: hidden;
`;

export const PlaceCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const IsOpen = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PlaceIcon = styled.Image`
  width: 15px;
  height: 15px;
`;
