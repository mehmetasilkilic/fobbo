import { Searchbar } from "react-native-paper";

import { PlaceInfoCard } from "../components/placeInfoCard.components";

import { SafeArea } from "../../../components/utility/safeArea.component";
import { SearchContainer, PlacesList } from "./places.styles";

export const PlacesScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <PlacesList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
      ]}
      renderItem={() => <PlaceInfoCard />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
