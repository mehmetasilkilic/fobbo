import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { WelcomeContainer, StartButton } from "./welcome.styles";

export const Welcome = ({ navigation }) => (
  <SafeArea>
    <WelcomeContainer>
      <Text>Fobbo</Text>
      <StartButton onPress={() => navigation.navigate("Register")}>
        <Spacer position="left" size="medium">
          <Text variant="subTitle">Get Started</Text>
        </Spacer>
      </StartButton>
    </WelcomeContainer>
  </SafeArea>
);
