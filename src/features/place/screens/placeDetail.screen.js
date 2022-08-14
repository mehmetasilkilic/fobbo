import { View, ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Appbar } from "react-native-paper";

import { FootTrafficChart } from "../components/footTrafficChart.component";
import { PlaceDetailHeader } from "../components/placeDetailHeader.component";
import { ReviewCard } from "../components/reviewCard.component";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { PlaceDetailContainer, Types, Row } from "./placeDetail.styles";

export const PlaceDetailScreen = ({ route }) => {
  const { place } = route.params;

  const appBarStyle = {
    paddingRight: 8,
    paddingLeft: 0,
    marginTop: 0,
    backgroundColor: "#9C1F19",
    justifyContent: "space-between",
  };

  const appBarIconStyle = {
    padding: 0,
    margin: 0,
  };

  const dotStyle = {
    width: 40,
    height: 5,
    borderRadius: 15,
    padding: 0,
    margin: 0,
  };

  return (
    <SafeArea>
      <Appbar.Header style={appBarStyle}>
        <View>
          <Appbar.Action
            color="white"
            icon="chevron-down"
            size={30}
            onPress={() => {}}
          />
        </View>
        <Types>
          <Appbar.Action
            style={appBarIconStyle}
            color="white"
            icon="map-marker-outline"
            size={26}
            onPress={() => {}}
          />
          <Appbar.Action
            style={appBarIconStyle}
            color="white"
            icon="cards-heart-outline"
            size={26}
            onPress={() => {}}
          />
        </Types>
      </Appbar.Header>
      <ScrollView>
        <PlaceDetailContainer>
          <PlaceDetailHeader place={place} />
          <Spacer position="bottom" size="large">
            <SliderBox
              images={place.photos}
              dotColor="#9C1F19"
              inactiveDotColor="#FDDEBB"
              dotStyle={dotStyle}
              circleLoop
            />
          </Spacer>
          <Spacer position="left" size="large">
            <Text variant="label">Foot Traffic</Text>
          </Spacer>
          <FootTrafficChart />
          <Row>
            <Text variant="label">All Ratings and Reviews</Text>
            <Text variant="error">Top Rated</Text>
          </Row>
          <ReviewCard />
          <ReviewCard />
        </PlaceDetailContainer>
      </ScrollView>
    </SafeArea>
  );
};
