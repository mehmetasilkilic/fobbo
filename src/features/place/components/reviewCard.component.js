import { AntDesign } from "@expo/vector-icons";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  Column,
  ImageColumn,
  ReviewCardContainer,
  ReviewColumn,
  Row,
  ProfilePicture,
  StarRow,
  ButtonRow,
  ReviewButton,
  ButtonText,
} from "./reviewCard.styles";

export const ReviewCard = ({ review }) => {
  const rateArr = Array.from(new Array(review.rating));
  const rateArrMinus = Array.from(new Array(5 - review.rating));

  return (
    <ReviewCardContainer>
      <ImageColumn>
        <ProfilePicture
          source={{
            uri: review.profilePicture,
          }}
        />
      </ImageColumn>
      <ReviewColumn>
        <Row>
          <Column>
            <Spacer position="bottom" size="small">
              <Text variant="error">{review.username}</Text>
            </Spacer>
            <Text variant="caption">{review.date}</Text>
          </Column>
          <StarRow>
            {rateArr.map((a, index) => (
              <AntDesign name="star" size={16} color="#D0421B" key={index} />
            ))}
            {rateArrMinus &&
              rateArrMinus.map((a, index) => (
                <AntDesign name="staro" size={16} color="#D0421B" key={index} />
              ))}
          </StarRow>
        </Row>
        <Spacer position="top" size="medium">
          <Text variant="hint">{review.reviewText}</Text>
        </Spacer>
        <Spacer position="top" size="medium">
          <ButtonRow>
            <Spacer position="right" size="medium">
              <ReviewButton onPress={() => {}}>
                <Spacer position="right" size="small">
                  <AntDesign name="like2" size={16} color="#D0421B" />
                </Spacer>
                <ButtonText variant="error">{review.likes}</ButtonText>
              </ReviewButton>
            </Spacer>
            <ReviewButton onPress={() => {}}>
              <Spacer position="right" size="small">
                <AntDesign name="dislike2" size={16} color="#D0421B" />
              </Spacer>
              <ButtonText variant="error">{review.dislikes}</ButtonText>
            </ReviewButton>
          </ButtonRow>
        </Spacer>
      </ReviewColumn>
    </ReviewCardContainer>
  );
};
