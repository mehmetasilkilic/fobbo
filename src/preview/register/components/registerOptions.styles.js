import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

const ButtonWidth = Dimensions.get("window").width - 20;
const ButtonWidthHalf = (Dimensions.get("window").width - 30) / 2;

export const RegisterContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.error};
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const ButtonSmall = styled(TouchableOpacity)`
  padding-vertical: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  border-radius: 5px;
  width: ${ButtonWidthHalf}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
