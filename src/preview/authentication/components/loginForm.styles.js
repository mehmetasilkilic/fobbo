import { TextInput, Dimensions } from "react-native";
import styled from "styled-components/native";

const InputWidth = Dimensions.get("window").width - 40;

export const LoginFormContainer = styled.View`
  margin: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[2]};
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: ${InputWidth}px;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding-horizontal: ${(props) => props.theme.space[2]};
  height: 40px;
  border-radius: ${(props) => props.theme.space[2]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
