import { View } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { AuthOptions } from "../components/authOptions.component";
import { Agreements } from "../components/agreements.component";
import { RegisterForm } from "../components/registerForm.component";

import { RegisterContainer, MidRow, OrContainer } from "./register.styles";

export const Register = ({ navigation }) => {
  const nav = () => navigation.navigate("Onboarding");
  const goLogin = () => navigation.navigate("Login");

  return (
    <SafeArea>
      <RegisterContainer>
        <Text variant="titleBig">Welcome to Fobbo</Text>
        <View>
          <RegisterForm />
          <MidRow>
            <OrContainer>
              <Text variant="whiteButton">OR</Text>
            </OrContainer>
          </MidRow>
          <AuthOptions onTouch={nav} goLogin={goLogin} page="register" />
        </View>
        <Agreements />
      </RegisterContainer>
    </SafeArea>
  );
};
