import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";

const ButtonWidthHalf = (Dimensions.get("window").width - 30) / 2;

export const AuthOptionsContainer = styled.View`
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[2]};
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

export const AgreementText = styled(Text)`
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.ui.primary};
`;
