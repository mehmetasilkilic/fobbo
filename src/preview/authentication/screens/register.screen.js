import { View } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { RegisterOptions } from "../components/registerOptions.component";
import { Agreements } from "../components/agreements.component";
import { RegisterForm } from "../components/registerForm.component";

import { RegisterContainer, MidRow, OrContainer } from "./register.styles";

export const Register = ({ navigation }) => {
  const nav = () => navigation.navigate("Onboarding");

  return (
    <SafeArea>
      <RegisterContainer>
        <Text variant="title">Welcome to Fobbo</Text>
        <View>
          <RegisterForm />
          <MidRow>
            <OrContainer>
              <Text variant="whiteButton">OR</Text>
            </OrContainer>
          </MidRow>
          <RegisterOptions onTouch={nav} />
        </View>
        <Agreements />
      </RegisterContainer>
    </SafeArea>
  );
};
