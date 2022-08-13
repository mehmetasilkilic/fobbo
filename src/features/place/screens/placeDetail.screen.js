import { SvgXml } from "react-native-svg";

import { SliderBox } from "react-native-image-slider-box";

import { SafeArea } from "../../../components/utils/safeArea.component";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";

import {
  HeaderContainer,
  Row,
  Title,
  RatingContainer,
  RatingContainerTop,
  RatingContainerBottom,
  Types,
} from "./placeDetail.styles";

export const PlaceDetailScreen = ({ route }) => {
  const { place } = route.params;

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
                <SvgXml xml={star} width={18} height={18} />
                <Text variant="error">200+</Text>
              </RatingContainerBottom>
            </RatingContainer>
          </Row>
        </Spacer>
        <Spacer position="bottom" size="small">
          <Types>
            {place.types.slice(0, typeCount).map((item, index) => (
              <Text variant="subTitle">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {index < typeCount - 1 ? ", " : ""}
              </Text>
            ))}
          </Types>
        </Spacer>
        <Text variant="lightError">{place.address}</Text>
      </HeaderContainer>
      <SliderBox
        images={place.photos}
        dotColor="#9C1F19"
        inactiveDotColor="#FDDEBB"
        dotStyle={dotStyle}
        circleLoop
      />
    </SafeArea>
  );
};
