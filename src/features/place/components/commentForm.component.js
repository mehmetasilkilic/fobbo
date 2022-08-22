import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  CommentFormContainer,
  Row,
  StarRow,
  SubmitButton,
  TextAreaContainer,
  TextArea,
} from "./commentForm.styles";

const starArr = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
];

export const CommentForm = () => {
  const [rate, setRate] = useState(5);
  const [text, onChangeText] = useState("");

  return (
    <CommentFormContainer>
      <Spacer position="bottom" size="medium">
        <Text variant="label">Leave a comment</Text>
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Row>
          <Text variant="error">Rate the place</Text>
          <StarRow>
            {starArr.map((star) => (
              <TouchableOpacity onPress={() => setRate(star.value)}>
                <AntDesign
                  name={star.value <= rate ? "star" : "staro"}
                  size={16}
                  color="#9C1F19"
                  key={star.value}
                />
              </TouchableOpacity>
            ))}
          </StarRow>
        </Row>
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Text variant="caption">Your comment</Text>
      </Spacer>
      <Spacer position="bottom" size="medium">
        <TextAreaContainer>
          <TextArea onChangeText={onChangeText} value={text} multiline={true} />
        </TextAreaContainer>
      </Spacer>
      <SubmitButton>
        <Text variant="subTitle">Submit Comment</Text>
      </SubmitButton>
    </CommentFormContainer>
  );
};
