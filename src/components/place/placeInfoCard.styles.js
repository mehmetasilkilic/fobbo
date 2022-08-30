import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const cardWidthHorizontal =
  Dimensions.get("window").width - Dimensions.get("window").width / 5;

const cardWidthHalf = (Dimensions.get("window").width - 30) / 2;

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

export const PlaceCardCoverBig = styled(Card.Cover)`
  height: 180px;
`;

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
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const PlaceIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const IsOpenContainer = styled.View`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  left: ${(props) => props.theme.space[2]};
  z-index: 9;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.success};
  height: 25px;
  border-radius: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[1]};
`;

export const IsCloseContainer = styled.View`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  left: ${(props) => props.theme.space[2]};
  z-index: 9;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.error};
  height: 25px;
  border-radius: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[1]};
`;

export const RatingContainerBig = styled.View`
  position: absolute;
  top: 145px;
  right: ${(props) => props.theme.space[2]};
  z-index: 9;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.success};
  height: 25px;
  border-radius: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[1]};
`;

export const RatingContainerSmall = styled.View`
  position: absolute;
  top: 105px;
  right: ${(props) => props.theme.space[2]};
  z-index: 9;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.success};
  height: 25px;
  border-radius: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[1]};
`;
