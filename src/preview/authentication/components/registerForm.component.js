import { View } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Button } from "../../../components/button/button.component";

import { Input, TitleContainer } from "./registerForm.styles";

export const RegisterForm = () => {
  return (
    <View>
      <TitleContainer>
        <Spacer position="bottom" size="medium">
          <Text variant="titleBrandMedium">Register</Text>
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
      <Button text="Submit" />
    </View>
  );
};
