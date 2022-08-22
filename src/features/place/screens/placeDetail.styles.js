import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";

export const SafeAreaDetail = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.brand.primary};
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`}
`;

export const PlaceDetailContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const TopBar = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.brand.primary};
  justify-content: space-between;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.disabled};
`;

export const RowCentered = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[2]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.disabled};
`;

export const Types = styled.View`
  flex-direction: row;
`;
