import { TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AuthContainer,
  Row,
  WelcomeContainer,
  StartButton,
} from "./welcome.styles";

export const Welcome = ({ navigation }) => (
  <SafeArea>
    <WelcomeContainer>
      <Text>Fobbo</Text>
      <AuthContainer>
        <Spacer position="bottom" size="medium">
          <TouchableOpacity onPress={() => navigation.navigate("Onboarding")}>
            <Text variant="brand">Continue as a guest</Text>
          </TouchableOpacity>
        </Spacer>
        <StartButton onPress={() => navigation.navigate("Register")}>
          <Spacer position="left" size="medium">
            <Text variant="titleSmall">Register</Text>
          </Spacer>
        </StartButton>
        <Spacer position="top" size="medium">
          <Row>
            <Spacer position="right" size="medium">
              <Text variant="label">Don't have an account?</Text>
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text variant="brand">Register</Text>
            </TouchableOpacity>
          </Row>
        </Spacer>
      </AuthContainer>
    </WelcomeContainer>
  </SafeArea>
);
