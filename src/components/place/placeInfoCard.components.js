import { AntDesign } from "@expo/vector-icons";

import { useTranslations } from "../../utils/useTranslations";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { Favorite } from "../favorites/favorite.component";

import iceCream from "../../../assets/ice-cream.png";
import hookah from "../../../assets/hookah.png";
import beer from "../../../assets/beer.png";

import {
  PlaceCardHorizontal,
  PlaceCardVertical,
  PlaceCardSmall,
  PlaceCardCoverBig,
  PlaceCardCoverSmall,
  Info,
  PlaceIconWrapper,
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
        url: hookah,
      },
      {
        id: 2,
        url: iceCream,
      },
      {
        id: 3,
        url: beer,
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

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <PlaceCard elevation={5}>
      <Favorite place={place} styleVariable="card" />
      <IfOpen>
        {isOpenNow && <Text variant="captionWhite">{t.place.open}</Text>}
        {!isOpenNow && <Text variant="captionWhite">{t.place.closed}</Text>}
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
        <PlaceIconWrapper>
          {iconList.map((icon) => (
            <Spacer key={icon.id} position="right" size="small">
              <PlaceIcon key={icon.id} source={icon.url} />
            </Spacer>
          ))}
        </PlaceIconWrapper>
        <Text numberOfLines={1} variant="caption">
          {address}
        </Text>
      </Info>
    </PlaceCard>
  );
};
