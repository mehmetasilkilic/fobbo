import { useState } from "react";
import { View } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { Input, TitleContainer, ButtonBig } from "./registerForm.styles";

export const RegisterForm = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <TitleContainer>
        <Spacer position="bottom" size="medium">
          <Text variant="titleMedium">Register</Text>
        </Spacer>
      </TitleContainer>
      <Spacer position="bottom" size="medium">
        <Input placeholder="email" />
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Input placeholder="username" />
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Input placeholder="password" />
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Input placeholder="password" />
      </Spacer>
      <ButtonBig>
        <Text variant="subTitle">Register</Text>
      </ButtonBig>
    </View>
  );
};
