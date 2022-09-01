import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";

const cardWidthHalf = (Dimensions.get("window").width - 30) / 2;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Column = styled.View`
  height: 160px;
  justify-content: space-between;
`;

export const ContainerLarge = styled.View`
  width: ${cardWidthHalf}px;
  height: 160px;
  border-radius: ${(props) => props.theme.space[2]}; ;
`;

export const ContainerMedium = styled.View`
  width: ${cardWidthHalf}px;
  height: 75px;
  border-radius: ${(props) => props.theme.space[2]}; ;
`;

export const ContainerSmall = styled.View`
  border-radius: ${(props) => props.theme.space[2]}; ;
`;

export const PictureLarge = styled.Image`
  width: ${cardWidthHalf}px;
  height: 160px;
  border-radius: ${(props) => props.theme.space[2]}; ;
`;

export const PictureMedium = styled.Image`
  width: ${cardWidthHalf}px;
  height: 75px;
  border-radius: ${(props) => props.theme.space[2]}; ;
`;

export const PictureSmall = styled.Image`
  width: ${cardWidthHalf}px;
  height: 40px;
  border-radius: ${(props) => props.theme.space[2]}; ;
`;

export const Label = styled(Text)`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  left: ${(props) => props.theme.space[2]};
  z-index: 9;
`;
