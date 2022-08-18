import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { PlacesFlatList, Row, InlineRow } from "./horizontalPlaceList.styles";

export const HorizontalPlaceList = ({ data, onNavigate }) => (
  <>
    <Row>
      <Text variant="boldLabel">Trending this week</Text>
      <InlineRow>
        <Text variant="error">View all </Text>
        <AntDesign name="doubleright" size={10} color="#D0421B" />
      </InlineRow>
    </Row>
    <PlacesFlatList
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
              <PlaceInfoCard place={item} cardStyle="horizontal" />
            </TouchableOpacity>
          </Spacer>
        );
      }}
      keyExtractor={(item) => item.name.split(" ").join("")}
    />
  </>
);
