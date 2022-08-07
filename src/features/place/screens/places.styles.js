import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const PlacesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
