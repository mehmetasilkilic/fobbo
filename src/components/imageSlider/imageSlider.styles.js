import { ScrollView, Dimensions } from "react-native";

import styled from "styled-components/native";

const width = Dimensions.get("window").width;

export const SliderContainer = styled.View`
  width: ${width};
  height: 200px;
`;

export const Slider = styled(ScrollView)`
  width: ${width};
  height: 200px;
`;

export const SliderImage = styled.Image`
  width: ${width};
  height: 200px;
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
