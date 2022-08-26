import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

const ButtonWidth = Dimensions.get("window").width - 20;

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  justify-content: center;
  align-items: center;
`;

export const AuthContainer = styled.View`
  position: absolute;
  bottom: ${(props) => props.theme.space[2]};
  justify-content: center;
  align-items: center;
`;

export const StartButton = styled(TouchableOpacity)`
  align-items: center;
  padding-vertical: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.primary};
  border-radius: 5px;
  width: ${ButtonWidth}px;
`;
