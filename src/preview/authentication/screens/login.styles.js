import { Dimensions } from "react-native";
import styled from "styled-components/native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export const TopBackground = styled.View`
  width: ${Width}px;
  height: ${Height * 0.35}px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  position: absolute;
  top: 0;
  border-bottom-left-radius: ${(props) => props.theme.space[2]};
  border-bottom-right-radius: ${(props) => props.theme.space[2]};
`;

export const TopBar = styled.View`
  margin-top: 30px;
  height: ${Height * 0.2}px;
  padding: ${(props) => props.theme.space[2]};
  justify-content: space-between;
`;

export const Column = styled.View`
  position: absolute;
  top: 200px;
  align-items: center;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const LoginContainer = styled.View`
  flex: 1;
  height: ${Height}px;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.space[2]};
  justify-content: center;
  align-items: center;
`;
