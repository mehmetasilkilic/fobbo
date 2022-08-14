import { Button } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/text.component";

import star from "../../../../assets/star";

import {
  Column,
  ImageColumn,
  ReviewCardContainer,
  ReviewColumn,
  Row,
  ProfilePicture,
  StarRow,
  ButtonRow,
} from "./reviewCard.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const ReviewCard = () => {
  const rating = 5;
  const rateArr = Array.from(new Array(Math.floor(rating)));

  const reviewText =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

  return (
    <ReviewCardContainer>
      <ImageColumn>
        <ProfilePicture
          source={{
            uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        />
      </ImageColumn>
      <ReviewColumn>
        <Row>
          <Column>
            <Spacer position="bottom" size="small">
              <Text variant="error">John Doe</Text>
            </Spacer>
            <Text variant="caption">20 Mar 2022</Text>
          </Column>
          <StarRow>
            {rateArr.map((a, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </StarRow>
        </Row>
        <Spacer position="top" size="large">
          <Text variant="hint">{reviewText}</Text>
        </Spacer>
        <Spacer position="top" size="medium">
          <ButtonRow>
            <Spacer position="right" size="medium">
              <Button
                compact={true}
                buttonColor="#D0421B"
                labelStyle={{ color: "#D0421B" }}
                icon="thumb-up-outline"
                mode="outlined"
                onPress={() => console.log("Pressed")}
              >
                324
              </Button>
            </Spacer>
            <Button
              compact={true}
              buttonColor="#D0421B"
              labelStyle={{ color: "#D0421B" }}
              icon="thumb-down-outline"
              mode="outlined"
              onPress={() => console.log("Pressed")}
            >
              16
            </Button>
          </ButtonRow>
        </Spacer>
      </ReviewColumn>
    </ReviewCardContainer>
  );
};
