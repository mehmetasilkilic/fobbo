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
  IsOpen,
  PlaceIcon,
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
    photos = [
      "https://b.zmtcdn.com/data/pictures/9/18208549/318364ae4f19038b81e3ac5444cfd306.jpg",
      "https://b.zmtcdn.com/data/pictures/9/18208549/bd9fc1778662e80d37fcde9b869be9d0.jpg",
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

  return (
    <PlaceCard elevation={5}>
      <Favourite place={place} styleVariable="card" />
      <PlaceCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text numberOfLines={1} variant="label">
          {name}
        </Text>
        <Row>
          <IsOpen>
            {iconList.map((icon) => (
              <Spacer key={icon.id} position="right" size="medium">
                <PlaceIcon key={icon.id} source={{ uri: icon.url }} />
              </Spacer>
            ))}
          </IsOpen>
        </Row>
        <Text numberOfLines={1} variant="caption">
          {address}
        </Text>
      </Info>
    </PlaceCard>
  );
};
