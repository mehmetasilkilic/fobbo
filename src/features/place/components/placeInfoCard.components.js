import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";

import open from "../../../../assets/open";
import star from "../../../../assets/star";

import {
  PlaceCard,
  PlaceCardCover,
  Info,
  Row,
  Rating,
  IsOpen,
  PlaceIcon,
} from "./placeInfoCard.styles";

export const PlaceInfoCard = ({ place = {} }) => {
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
    isClosedTemporarily = true,
  } = place;

  const rateArr = Array.from(new Array(Math.floor(rating)));

  return (
    <Spacer position="bottom" size="large">
      <PlaceCard elevation={5}>
        <Favourite place={place} styleVariable="card" />
        <PlaceCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Row>
            <Rating>
              {rateArr.map((a, index) => (
                <SvgXml key={index} xml={star} width={20} height={20} />
              ))}
            </Rating>
            <IsOpen>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              {isOpenNow && (
                <Spacer position="left" size="large">
                  <SvgXml xml={open} width={20} height={20} />
                </Spacer>
              )}
              {iconList.map((icon) => (
                <Spacer key={icon.id} position="left" size="large">
                  <PlaceIcon key={icon.id} source={{ uri: icon.url }} />
                </Spacer>
              ))}
            </IsOpen>
          </Row>
          <Text variant="caption">{address}</Text>
        </Info>
      </PlaceCard>
    </Spacer>
  );
};
