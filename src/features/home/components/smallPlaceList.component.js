import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { PlaceInfoCard } from "../../place/components/placeInfoCard.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  SmallPlaceListContainer,
  Row,
  InlineRow,
} from "./smallPlaceList.styles";

export const SmallPlaceList = ({ data, navigation }) => {
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
        {data.slice(0, 4).map((item) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PlaceDetail", {
                place: item,
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
