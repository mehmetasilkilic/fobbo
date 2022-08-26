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
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-vertical: ${(props) => props.theme.space[1]};
  border-radius: 5px;
`;

export const ButtonBig = styled(TouchableOpacity)`
  padding-vertical: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  border-radius: 5px;
  width: ${ButtonWidth}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
