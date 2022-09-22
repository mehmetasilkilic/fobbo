import { FlatList, StatusBar } from "react-native";
import styled from "styled-components/native";

const ListPaddingBottom = StatusBar.currentHeight ? 125 : 140;

export const PlacesContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const PlacesList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 10, paddingBottom: ListPaddingBottom },
})``;

export const Row = styled.View`
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InnerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MessageContianer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
