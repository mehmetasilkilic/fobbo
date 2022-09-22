import { FlatList, StatusBar } from "react-native";
import styled from "styled-components/native";

const ListPaddingBottom = StatusBar.currentHeight ? 135 : 160;

export const FavoritesContainer = styled.View`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding-bottom: 30px;
`;

export const FavoritesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 10, paddingBottom: ListPaddingBottom },
})``;

export const TopBar = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
