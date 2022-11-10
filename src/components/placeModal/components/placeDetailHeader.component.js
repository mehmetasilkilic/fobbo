import { AntDesign } from "@expo/vector-icons";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

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
  const typeCount = 4; //place.types.length > 3 ? 3 : place.types.length;

  const types = ["Restaurant", "Cafe"];

  return (
    <HeaderContainer>
      <Spacer position="bottom" size="large">
        <Row>
          <Title variant="titleBig">{place.name}</Title>
          <RatingContainer>
            <RatingContainerTop>
              <AntDesign name="staro" size={16} color="#ED0F7E" />
              <Text variant="error">{place.rating} / 5</Text>
            </RatingContainerTop>
            <RatingContainerBottom>
              <AntDesign name="message1" size={16} color="#ED0F7E" />
              <Text variant="error">200+</Text>
            </RatingContainerBottom>
          </RatingContainer>
        </Row>
      </Spacer>
      <Spacer position="bottom" size="small">
        <Types>
          {types.slice(0, typeCount).map((item, index) => (
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
        <AntDesign name="checkcircle" size={16} color="#138000" />
        <Text variant="success">Open now</Text>
      </IfOpen>
    </HeaderContainer>
  );
};
