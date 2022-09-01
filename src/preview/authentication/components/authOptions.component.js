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
            <AntDesign name="facebook-square" size={18} color={"#ffffff"} />
          </Spacer>
          <Text variant="titleSmall">Facebook</Text>
        </ButtonSmall>
      </Spacer>
      <ButtonSmall onPress={onTouch}>
        <Spacer position="right" size="medium">
          <AntDesign name="google" size={18} color={"#ffffff"} />
        </Spacer>
        <Text variant="titleSmall">Google</Text>
      </ButtonSmall>
    </Row>
    {page === "register" ? (
      <Spacer position="top" size="medium">
        <Row>
          <Spacer position="right" size="medium">
            <Text variant="label">Dou you have an account?</Text>
          </Spacer>
          <TouchableOpacity onPress={goLogin}>
            <Text variant="brand">Login</Text>
          </TouchableOpacity>
        </Row>
      </Spacer>
    ) : (
      <Spacer position="top" size="medium">
        <Row>
          <Spacer position="right" size="medium">
            <Text variant="label">Don't have an account?</Text>
          </Spacer>
          <TouchableOpacity onPress={goRegister}>
            <Text variant="brand">Register</Text>
          </TouchableOpacity>
        </Row>
      </Spacer>
    )}
  </AuthOptionsContainer>
);
