import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const cardWidthHorizontal =
  Math.floor(Dimensions.get("window").width) -
  Math.floor(Dimensions.get("window").width) / 5;

const cardWidthHalf = (Math.floor(Dimensions.get("window").width) - 30) / 2;

export const PlaceCardHorizontal = styled(Card)`
  width: ${cardWidthHorizontal}px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  overflow: hidden;
`;

export const PlaceCardVertical = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  overflow: hidden;
`;

export const PlaceCardSmall = styled(Card)`
  width: ${cardWidthHalf}px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-right: ${(props) => props.theme.space[2]};
  overflow: hidden;
`;

export const PlaceCardCoverBig = styled(Card.Cover)``;

export const PlaceCardCoverSmall = styled(Card.Cover)`
  height: 140px;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
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
