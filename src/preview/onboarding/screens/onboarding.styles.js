import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const OnboardingContainer = styled.View`
  flex: 1;
`;

export const SkipButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  right: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) => props.theme.space[1]};
  width: 70px;
  border-radius: ${(props) => props.theme.space[1]};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.brand.primary};
`;
