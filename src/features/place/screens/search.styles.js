import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SearchScreenContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const PlacesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 10, paddingBottom: 120 },
})``;

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
