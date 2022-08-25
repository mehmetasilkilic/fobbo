import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

const ButtonWidth = Dimensions.get("window").width - 20;

export const LocationContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  justify-content: center;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  margin-top: 40px;
  padding-vertical: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 5px;
  width: ${ButtonWidth}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
