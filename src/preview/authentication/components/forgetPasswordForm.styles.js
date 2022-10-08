import { Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";

const InputWidth = Dimensions.get("window").width - 40;

export const ForgetPasswordFormContainer = styled.View`
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[2]};
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: ${InputWidth}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 40px;
`;
