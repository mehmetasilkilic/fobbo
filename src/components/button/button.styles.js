import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

const ButtonWidth = Dimensions.get("window").width - 40;

export const StartButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${(props) => props.theme.colors.brand.primary};
  border-radius: ${(props) => props.theme.space[2]};
  width: ${ButtonWidth}px;
`;
