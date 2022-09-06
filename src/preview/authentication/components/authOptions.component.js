import { TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Facebook from "expo-facebook";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthOptionsContainer, Row, ButtonSmall } from "./authOptions.styles";

export const AuthOptions = ({ onTouch, goLogin, goRegister, page }) => {
  const facebookLogin = async () => {
    try {
      await Facebook.initializeAsync({
        appId: "592408622537822",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`
        );
        console.log("token", token);
        console.log("response", await response.json());
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <AuthOptionsContainer>
      <Row>
        <Spacer position="right" size="medium">
          <ButtonSmall onPress={facebookLogin}>
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
};
