import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const SearchScreenContainer = styled(ScrollView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.disabled};
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.ui.disabled};
`;
