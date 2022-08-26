import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthOptionsContainer, Row, ButtonSmall } from "./authOptions.styles";

export const AuthOptions = ({ onTouch, goLogin, goRegister, page }) => (
  <AuthOptionsContainer>
    <Row>
      <Spacer position="right" size="medium">
        <ButtonSmall>
          <Spacer position="right" size="medium">
            <AntDesign name="facebook-square" size={20} color={"#262626"} />
          </Spacer>
          <Text>Facebook</Text>
        </ButtonSmall>
      </Spacer>
      <ButtonSmall onPress={onTouch}>
        <Spacer position="right" size="medium">
          <AntDesign name="google" size={20} color={"#262626"} />
        </Spacer>
        <Text>Google</Text>
      </ButtonSmall>
    </Row>
    {page === "register" ? (
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="caption">Dou you have an account?</Text>
          <TouchableOpacity onPress={goLogin}>
            <Text variant="error">Login</Text>
          </TouchableOpacity>
        </Row>
      </Spacer>
    ) : (
      <Spacer position="top" size="medium">
        <TouchableOpacity onPress={goRegister}>
          <Text variant="error">Don't have an account?</Text>
        </TouchableOpacity>
      </Spacer>
    )}
  </AuthOptionsContainer>
);
