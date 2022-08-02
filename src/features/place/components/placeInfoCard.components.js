import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import open from "../../../../assets/open";
import star from "../../../../assets/star";

const PlaceCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const PlaceCardCover = styled(Card.Cover)`
  padding-top: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex-direction: row;
`;

const IsOpen = styled.View`
  flex-direction: row;
`;

const CloseText = styled.Text`
  color: red;
`;

const PlaceIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

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
    <PlaceCard elevation={5}>
      <PlaceCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {rateArr.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <IsOpen>
            {isClosedTemporarily && <CloseText>CLOSED TEMPORARILY</CloseText>}
            {isOpenNow && (
              <>
                {/* <Spacer position="left" size="large"> */}
                <SvgXml xml={open} width={20} height={20} />
                {/* </Spacer> */}
              </>
            )}
            {iconList.map((icon) => (
              <>
                {/* <Spacer key={icon.id} position="left" size="large"> */}
                <PlaceIcon key={icon.id} source={{ uri: icon.url }} />
                {/* </Spacer> */}
              </>
            ))}
          </IsOpen>
        </Row>
        <Address>{address}</Address>
      </Info>
    </PlaceCard>
  );
};
