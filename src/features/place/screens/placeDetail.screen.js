import { SvgXml } from "react-native-svg";

import { SafeArea } from "../../../components/utils/safeArea.component";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";

import { PlaceInfoCard } from "../components/placeInfoCard.components";

import {
  HeaderContainer,
  Row,
  Title,
  RatingContainer,
  RatingContainerTop,
  RatingContainerBottom,
} from "./placeDetail.styles";

export const PlaceDetailScreen = ({ route }) => {
  const { place } = route.params;

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
                <Text variant="error">(200+)</Text>
              </RatingContainerBottom>
            </RatingContainer>
          </Row>
        </Spacer>
        <Text variant="lightError">{place.address}</Text>
      </HeaderContainer>
      <PlaceInfoCard place={place} />
    </SafeArea>
  );
};
