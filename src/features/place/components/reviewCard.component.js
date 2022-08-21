import { useState, useCallback } from "react";
import { TouchableOpacity } from "react-native";
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
  ReviewButtonToggled,
  ButtonText,
} from "./reviewCard.styles";

export const ReviewCard = ({ review }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);

  const onTextLayout = useCallback(
    (e) => {
      if (numOfLines === 0) {
        setNumOfLines(e.nativeEvent.lines.length);
      }
    },
    [numOfLines]
  );

  const onLoadMoreToggle = () => {
    setLoadMore(!loadMore);
  };

  const rateArr = Array.from(new Array(review.rating));
  const rateArrMinus = Array.from(new Array(5 - review.rating));

  const LikeButton = liked ? ReviewButtonToggled : ReviewButton;
  const DislikeButton = disliked ? ReviewButtonToggled : ReviewButton;

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
              <Text variant="error" numberOfLines={1}>
                {review.username}
              </Text>
            </Spacer>
            <Text variant="caption">{review.date}</Text>
          </Column>
          <StarRow>
            {rateArr.map((a, index) => (
              <AntDesign name="star" size={16} color="#9C1F19" key={index} />
            ))}
            {rateArrMinus &&
              rateArrMinus.map((a, index) => (
                <AntDesign name="staro" size={16} color="#9C1F19" key={index} />
              ))}
          </StarRow>
        </Row>
        <Spacer position="top" size="medium">
          <Text
            variant="hint"
            numberOfLines={numOfLines === 0 ? null : loadMore ? numOfLines : 3}
            onTextLayout={onTextLayout}
          >
            {review.reviewText}
          </Text>
          {numOfLines > 3 && (
            <TouchableOpacity onPress={onLoadMoreToggle}>
              <Text variant="error">
                {loadMore ? "Load Less" : "Load More"}
              </Text>
            </TouchableOpacity>
          )}
        </Spacer>
        <Spacer position="top" size="medium">
          <ButtonRow>
            <Spacer position="right" size="medium">
              <LikeButton
                onPress={() => {
                  setLiked(!liked);
                  if (disliked) {
                    setDisliked(false);
                  }
                }}
              >
                <Spacer position="right" size="small">
                  <AntDesign
                    name="like2"
                    size={16}
                    color={liked ? "#FFFFFF" : "#9C1F19"}
                  />
                </Spacer>
                <ButtonText variant={liked ? "whiteButton" : "error"}>
                  {review.likes > 999
                    ? "999+"
                    : liked && review.likes < 999
                    ? review.likes + 1
                    : liked && review.likes === 999
                    ? review.likes + "+"
                    : review.likes}
                </ButtonText>
              </LikeButton>
            </Spacer>
            <DislikeButton
              onPress={() => {
                setDisliked(!disliked);
                if (liked) {
                  setLiked(false);
                }
              }}
            >
              <Spacer position="right" size="small">
                <AntDesign
                  name="dislike2"
                  size={16}
                  color={disliked ? "#FFFFFF" : "#9C1F19"}
                />
              </Spacer>
              <ButtonText variant={disliked ? "whiteButton" : "error"}>
                {review.dislikes > 999
                  ? "999+"
                  : disliked && review.dislikes < 999
                  ? review.dislikes + 1
                  : disliked && review.dislikes === 999
                  ? review.dislikes + "+"
                  : review.dislikes}
              </ButtonText>
            </DislikeButton>
          </ButtonRow>
        </Spacer>
      </ReviewColumn>
    </ReviewCardContainer>
  );
};
