import { Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";

const ButtonWidth = Dimensions.get("window").width - 40;

export const RegisterFormContainer = styled.View`
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[2]};
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: ${ButtonWidth}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 40px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AgreementText = styled(Text)`
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.ui.primary};
`;
