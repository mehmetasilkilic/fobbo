import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`}
`;

export const SafeAreaSecond = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`}
`;

export const SafeAreaBottom = styled(SafeAreaView)`
  flex: 0;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ModalArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
