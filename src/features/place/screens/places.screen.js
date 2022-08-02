import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

import { PlaceInfoCard } from "../components/placeInfoCard.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const PlacesScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ListContainer>
      <PlaceInfoCard />
    </ListContainer>
  </SafeArea>
);
