import { Text } from "../../../components/typography/text.component";

import { RegisterOptions } from "../components/registerOptions.component";
import { Agreements } from "../components/agreements.component";
import { RegisterForm } from "../components/registerForm.component";

import { RegisterContainer, MidRow, OrContainer } from "./register.styles";

export const Register = ({ onTouch }) => (
  <RegisterContainer>
    <RegisterForm />
    <MidRow>
      <OrContainer>
        <Text variant="whiteButton">OR</Text>
      </OrContainer>
    </MidRow>
    <RegisterOptions onTouch={onTouch} />
    <Agreements />
  </RegisterContainer>
);
