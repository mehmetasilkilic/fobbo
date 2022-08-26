import { Dimensions } from "react-native";
import styled from "styled-components/native";

const Width = Dimensions.get("window").width - 20;

export const LoginContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.error};
  padding: ${(props) => props.theme.space[2]};
  justify-content: center;
  align-items: center;
`;

export const MidRow = styled.View`
  width: ${Width}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.disabled};
  justify-content: center;
  align-items: center;
  margin-vertical: ${(props) => props.theme.space[4]};
`;

export const OrContainer = styled.View`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.text.primary};
  justify-content: center;
  align-items: center;
`;