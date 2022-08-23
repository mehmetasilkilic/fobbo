import styled from "styled-components/native";
import { FlatList } from "react-native";

export const PlacesContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const PlacesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 10, paddingBottom: 80 },
})``;
