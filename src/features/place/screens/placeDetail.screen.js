import { View, ScrollView, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from "@expo/vector-icons";

import { FootTrafficChart } from "../components/footTrafficChart.component";
import { PlaceDetailHeader } from "../components/placeDetailHeader.component";
import { ReviewCard } from "../components/reviewCard.component";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";

import { PlaceDetailContainer, Types, Row, TopBar } from "./placeDetail.styles";

export const PlaceDetailScreen = ({ route }) => {
  const { place } = route.params;

  const dotStyle = {
    width: 40,
    height: 5,
    borderRadius: 15,
    padding: 0,
    margin: 0,
  };

  return (
    <SafeArea>
      <TopBar>
        <View>
          <AntDesign name="down" size={24} color={"white"} />
        </View>
        <Types>
          <Spacer position="right" size="large">
            <TouchableOpacity>
              <AntDesign name="enviromento" size={24} color={"white"} />
            </TouchableOpacity>
          </Spacer>
          <Favourite place={place} />
        </Types>
      </TopBar>
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
