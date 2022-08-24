import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`}
`;
