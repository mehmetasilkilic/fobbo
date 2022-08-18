import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { PlaceInfoCard } from "../../place/components/placeInfoCard.components";
import { Spacer } from "../../../components/spacer/spacer.component";

const HorizontalBarContainer = styled.View`
  padding: 10px;
`;

export const HorizontalPlaceList = ({ data, onNavigate }) => (
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
