import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";

import { StartButton } from "./button.styles";

export const Button = ({ onTouch, text }) => {
  return (
    <StartButton onPress={onTouch}>
      <Spacer position="left" size="medium">
        <Text variant="titleSmall">{text}</Text>
      </Spacer>
    </StartButton>
  );
};
