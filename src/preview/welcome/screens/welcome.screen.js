import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthContainer, WelcomeContainer, StartButton } from "./welcome.styles";

export const Welcome = ({ navigation }) => (
  <SafeArea>
    <WelcomeContainer>
      <Text>Fobbo</Text>
      <AuthContainer>
        <Spacer position="bottom" size="medium">
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
            <Text variant="label">Continue as a guest</Text>
          </TouchableOpacity>
        </Spacer>
        <StartButton onPress={() => navigation.navigate("Register")}>
          <Spacer position="left" size="medium">
            <Text variant="subTitle">Register</Text>
          </Spacer>
        </StartButton>
        <Spacer position="top" size="medium">
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text variant="label">Do you have an account?</Text>
          </TouchableOpacity>
        </Spacer>
      </AuthContainer>
    </WelcomeContainer>
  </SafeArea>
);
