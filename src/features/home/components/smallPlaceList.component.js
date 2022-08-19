import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  SmallPlaceListContainer,
  Row,
  InlineRow,
} from "./smallPlaceList.styles";

export const SmallPlaceList = ({ data, onNavigate }) => {
  return (
    <>
      <Row>
        <Text variant="boldLabel">Most Popular</Text>
        <InlineRow>
          <Text variant="error">26 Places </Text>
          <AntDesign name="doubleright" size={10} color="#D0421B" />
        </InlineRow>
      </Row>
      <SmallPlaceListContainer>
        {data.slice(0, 4).map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              onNavigate("Places", {
                screen: "PlaceDetail",
                params: { place: item },
              })
            }
          >
            <Spacer position="bottom" size="medium">
              <PlaceInfoCard place={item} cardStyle="small" />
            </Spacer>
          </TouchableOpacity>
        ))}
      </SmallPlaceListContainer>
    </>
  );
};
