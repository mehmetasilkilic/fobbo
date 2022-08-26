import { SvgXml } from "react-native-svg";

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
} from "./placeDetailHeader.styles";

export const PlaceDetailHeader = ({ place }) => {
  const typeCount = place.types.length > 3 ? 3 : place.types.length;

  return (
    <HeaderContainer>
      <Spacer position="bottom" size="large">
        <Row>
          <Title variant="titleBig">{place.name}</Title>
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
            <Text key={index} variant="titleSmall">
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {index < typeCount - 1 ? ", " : ""}
            </Text>
          ))}
        </Types>
      </Spacer>
      <Spacer position="bottom" size="small">
        <Text variant="lightBrand">{place.address}</Text>
      </Spacer>
      <IfOpen>
        <SvgXml xml={success} width={18} height={18} />
        <Text variant="success">Open now</Text>
      </IfOpen>
    </HeaderContainer>
  );
};
