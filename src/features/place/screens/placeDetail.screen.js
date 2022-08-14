import { View, ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Appbar } from "react-native-paper";

import { SvgXml } from "react-native-svg";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import star from "../../../../assets/star";
import success from "../../../../assets/success";
import comment from "../../../../assets/comment";

import {
  HeaderContainer,
  Row,
  Title,
  RatingContainer,
  RatingContainerTop,
  RatingContainerBottom,
  Types,
  IfOpen,
} from "./placeDetail.styles";

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

  const typeCount = place.types.length > 3 ? 3 : place.types.length;
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
        <HeaderContainer>
          <Spacer position="bottom" size="large">
            <Row>
              <Title variant="title">{place.name}</Title>
              <RatingContainer>
                <RatingContainerTop>
                  <SvgXml xml={star} width={18} height={18} />
                  <Text variant="error">{place.rating} / 5</Text>
                </RatingContainerTop>
                <RatingContainerBottom>
                  <SvgXml xml={comment} width={18} height={18} />
                  <Text variant="error">200+</Text>
                </RatingContainerBottom>
              </RatingContainer>
            </Row>
          </Spacer>
          <Spacer position="bottom" size="small">
            <Types>
              {place.types.slice(0, typeCount).map((item, index) => (
                <Text key={index} variant="subTitle">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {index < typeCount - 1 ? ", " : ""}
                </Text>
              ))}
            </Types>
          </Spacer>
          <Spacer position="bottom" size="small">
            <Text variant="lightError">{place.address}</Text>
          </Spacer>
          <IfOpen>
            <SvgXml xml={success} width={18} height={18} />
            <Text variant="success">Open now</Text>
          </IfOpen>
        </HeaderContainer>
        <SliderBox
          images={place.photos}
          dotColor="#9C1F19"
          inactiveDotColor="#FDDEBB"
          dotStyle={dotStyle}
          circleLoop
        />
      </ScrollView>
    </SafeArea>
  );
};
