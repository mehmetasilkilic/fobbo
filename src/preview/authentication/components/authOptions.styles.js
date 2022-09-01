import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

const ButtonWidthHalf = (Dimensions.get("window").width - 50) / 2;

export const AuthOptionsContainer = styled.View`
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonSmall = styled(TouchableOpacity)`
  padding-vertical: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.space[2]};
  width: ${ButtonWidthHalf}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
