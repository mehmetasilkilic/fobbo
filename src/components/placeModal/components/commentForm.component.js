import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useTranslations } from "../../../utils/useTranslations";

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

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <CommentFormContainer>
      <Spacer position="bottom" size="medium">
        <Text variant="label">{t.place.leaveComment}</Text>
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Row>
          <Text variant="error">{t.place.tapToRate}</Text>
          <StarRow>
            {starArr.map((star) => (
              <TouchableOpacity
                key={star.value}
                onPress={() => setRate(star.value)}
              >
                <AntDesign
                  name={star.value <= rate ? "star" : "staro"}
                  size={24}
                  color="#ED0F7E"
                />
              </TouchableOpacity>
            ))}
          </StarRow>
        </Row>
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Text variant="caption">{t.place.yourComment}</Text>
      </Spacer>
      <Spacer position="bottom" size="medium">
        <TextAreaContainer>
          <TextArea onChangeText={onChangeText} value={text} multiline={true} />
        </TextAreaContainer>
      </Spacer>
      <SubmitButton>
        <Text variant="titleSmall">{t.place.send}</Text>
      </SubmitButton>
    </CommentFormContainer>
  );
};
