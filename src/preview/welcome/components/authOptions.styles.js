import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";

const ButtonWidthHalf = (Dimensions.get("window").width - 50) / 2;

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

export const FacebookButton = styled(TouchableOpacity)`
  height: 40px;
  background-color: #3b5998;
  border-radius: ${(props) => props.theme.space[2]};
  width: ${ButtonWidthHalf}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-width: 1px;
  border-color: #3b5998;
`;

export const GoogleButton = styled(TouchableOpacity)`
  height: 40px;
  border-radius: ${(props) => props.theme.space[2]};
  width: ${ButtonWidthHalf}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.text.primary};
`;

export const AgreementText = styled(Text)`
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.ui.primary};
`;

export const GoogleIcon = styled.Image`
  width: 30px;
  height: 30px;
`;
