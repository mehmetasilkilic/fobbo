import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";

import { RegisterOptions } from "../components/registerOptions.component";
import { Agreements } from "../components/agreements.component";
import { RegisterForm } from "../components/registerForm.component";

import {
  RegisterContainer,
  MidRow,
  OrContainer,
} from "./authentication.styles";

export const Authentication = ({ navigation }) => {
  const nav = () => navigation.navigate("Onboarding");

  return (
    <SafeArea>
      <RegisterContainer>
        <RegisterForm />
        <MidRow>
          <OrContainer>
            <Text variant="whiteButton">OR</Text>
          </OrContainer>
        </MidRow>
        <RegisterOptions onTouch={nav} />
        <Agreements />
      </RegisterContainer>
    </SafeArea>
  );
};
