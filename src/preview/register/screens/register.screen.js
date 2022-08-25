import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import {
  RegisterContainer,
  Row,
  ButtonBig,
  ButtonSmall,
} from "./register.styles";

export const Register = ({ navigation }) => (
  <SafeArea>
    <RegisterContainer>
      <Row>
        <Spacer position="right" size="medium">
          <ButtonSmall>
            <Text>Facebook</Text>
          </ButtonSmall>
        </Spacer>
        <ButtonSmall>
          <Text>Google</Text>
        </ButtonSmall>
      </Row>
      <Spacer position="top" size="medium">
        <ButtonBig onPress={() => navigation.navigate("Onboarding")}>
          <Text>Continue as a guest</Text>
        </ButtonBig>
      </Spacer>
    </RegisterContainer>
  </SafeArea>
);
