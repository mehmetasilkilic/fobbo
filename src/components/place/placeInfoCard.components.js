import { AntDesign } from "@expo/vector-icons";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { Favourite } from "../favourites/favourite.component";

import {
  PlaceCardHorizontal,
  PlaceCardVertical,
  PlaceCardSmall,
  PlaceCardCoverBig,
  PlaceCardCoverSmall,
  Info,
  Row,
  PlaceIcon,
  RatingContainerBig,
  RatingContainerSmall,
  IsOpenContainer,
  IsCloseContainer,
} from "./placeInfoCard.styles";

export const PlaceInfoCard = ({ place = {}, cardStyle }) => {
  const {
    name = "Pardi",
    iconList = [
      {
        id: 1,
        url: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      },
    ],
    images = [
      {
        id: 1,
        url: "https://b.zmtcdn.com/data/pictures/9/18208549/318364ae4f19038b81e3ac5444cfd306.jpg",
      },
      {
        id: 2,
        url: "https://b.zmtcdn.com/data/pictures/9/18208549/318364ae4f19038b81e3ac5444cfd306.jpg",
      },
    ],
    address = "Ataköy 9. Kısım, Uğur Mumcu Bulvarı , Hanımeli Çiçeği Sokak 1/2, 34158 Bakırköy/İstanbul",
    isOpenNow = true,
    rating = 5,
  } = place;

  const PlaceCard =
    cardStyle === "vertical"
      ? PlaceCardVertical
      : cardStyle === "horizontal"
      ? PlaceCardHorizontal
      : cardStyle === "small"
      ? PlaceCardSmall
      : "";

  const PlaceCardCover =
    cardStyle === "vertical"
      ? PlaceCardCoverBig
      : cardStyle === "horizontal"
      ? PlaceCardCoverBig
      : cardStyle === "small"
      ? PlaceCardCoverSmall
      : "";

  const RatingContainer =
    cardStyle === "vertical"
      ? RatingContainerBig
      : cardStyle === "horizontal"
      ? RatingContainerBig
      : cardStyle === "small"
      ? RatingContainerSmall
      : "";

  const IfOpen = isOpenNow ? IsOpenContainer : IsCloseContainer;

  return (
    <PlaceCard elevation={5}>
      <Favourite place={place} styleVariable="card" />
      <IfOpen>
        {isOpenNow && <Text variant="captionWhite">OPEN</Text>}
        {!isOpenNow && <Text variant="captionWhite">CLOSED</Text>}
      </IfOpen>
      <RatingContainer>
        <AntDesign name="staro" size={14} color={"white"} />
        <Spacer position="left" size="small">
          <Text variant="captionWhite">{place.rating}</Text>
        </Spacer>
      </RatingContainer>
      <PlaceCardCover
        key={name}
        source={{
          uri: images[0]
            ? images[0].url
            : "https://via.placeholder.com/1920x1080.png/00ffcc?text=places+quas",
        }}
      />
      <Info>
        <Spacer position="bottom" size="medium">
          <Text numberOfLines={1} variant="label">
            {name}
          </Text>
        </Spacer>
        <Row>
          {iconList.map((icon) => (
            <Spacer key={icon.id} position="right" size="medium">
              <PlaceIcon key={icon.id} source={{ uri: icon.url }} />
            </Spacer>
          ))}
        </Row>
        <Text numberOfLines={1} variant="caption">
          {address}
        </Text>
      </Info>
    </PlaceCard>
  );
};
