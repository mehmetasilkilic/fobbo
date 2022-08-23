import { ScrollView, Dimensions } from "react-native";

import styled from "styled-components/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height * 0.3;

export const SliderContainer = styled.View`
  width: ${width}px;
  height: ${height}px;
`;

export const Slider = styled(ScrollView)`
  width: ${width}px;
  height: ${height}px;
`;

export const SliderImage = styled.Image`
  width: ${width}px;
  height: ${height}px;
`;

export const DotContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
  align-self: center;
`;

export const DotPassive = styled.Text`
  color: ${(props) => props.theme.colors.ui.disabled};
  font-size: 15px;
  margin: ${(props) => props.theme.space[1]};
`;

export const DotActive = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: 15px;
  margin: ${(props) => props.theme.space[1]};
`;
