import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

const ButtonWidth = Dimensions.get("window").width - 20;

export const StartButton = styled(TouchableOpacity)`
  align-items: center;
  padding-vertical: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.primary};
  border-radius: 5px;
  width: ${ButtonWidth}px;
`;