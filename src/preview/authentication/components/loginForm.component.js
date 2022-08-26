import { useState } from "react";
import { View } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { Input, TitleContainer, ButtonBig } from "./loginForm.styles";

export const LoginForm = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <TitleContainer>
        <Spacer position="bottom" size="medium">
          <Text variant="titleBrandMedium">Login</Text>
        </Spacer>
      </TitleContainer>
      <Spacer position="bottom" size="medium">
        <Input placeholder="email" />
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Input placeholder="password" />
      </Spacer>
      <ButtonBig>
        <Text variant="titleSmall">Login</Text>
      </ButtonBig>
    </View>
  );
};
