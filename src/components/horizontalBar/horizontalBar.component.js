import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { PlaceInfoCard } from "../../features/place/components/placeInfoCard.components";
import { Spacer } from "../spacer/spacer.component";

const HorizontalBarContainer = styled.View`
  padding: 10px;
`;

export const HorizontalBar = ({ data, onNavigate }) => (
  <HorizontalBarContainer>
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Spacer position="left" size="medium">
            <TouchableOpacity
              onPress={() =>
                onNavigate("Places", {
                  screen: "PlaceDetail",
                  params: { place: item },
                })
              }
            >
              <PlaceInfoCard place={item} ifVertical={false} />
            </TouchableOpacity>
          </Spacer>
        );
      }}
      keyExtractor={(item) => item.name.split(" ").join("")}
    />
  </HorizontalBarContainer>
);
