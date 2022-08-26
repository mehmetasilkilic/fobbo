import { View } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { AuthOptions } from "../components/authOptions.component";
import { LoginForm } from "../components/loginForm.component";

import { LoginContainer, MidRow, OrContainer } from "./login.styles";

export const Login = ({ navigation }) => {
  const nav = () => navigation.navigate("Onboarding");
  const goLogin = () => navigation.navigate("Login");
  const goRegister = () => navigation.navigate("Register");

  return (
    <SafeArea>
      <LoginContainer>
        <View>
          <LoginForm />
          <MidRow>
            <OrContainer>
              <Text variant="whiteButton">OR</Text>
            </OrContainer>
          </MidRow>
          <AuthOptions
            onTouch={nav}
            goLogin={goLogin}
            goRegister={goRegister}
          />
        </View>
      </LoginContainer>
    </SafeArea>
  );
};
