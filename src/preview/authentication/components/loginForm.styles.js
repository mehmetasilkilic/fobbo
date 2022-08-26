import { TouchableOpacity, TextInput, Dimensions } from "react-native";
import styled from "styled-components/native";

const ButtonWidth = Dimensions.get("window").width - 20;

export const TitleContainer = styled.View`
  width: ${ButtonWidth}px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Input = styled(TextInput)`
  width: ${ButtonWidth}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-vertical: ${(props) => props.theme.space[1]};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const ButtonBig = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${ButtonWidth}px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding-vertical: ${(props) => props.theme.space[2]};
  border-radius: 5px;
`;