import styled from "styled-components/native";
import { FlatList } from "react-native";

export const FavouritesContainer = styled.View`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding-bottom: 30px;
`;

export const FavouritesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 10 },
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
