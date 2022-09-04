import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import * as Device from "expo-device";

import { register } from "../../../store/user/user.service";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Button } from "../../../components/button/button.component";

import { AuthContainer, Row, WelcomeContainer } from "./welcome.styles";

export const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();

  const deviceName = `${Device.brand}-${Device.modelName}`;

  const formData = {
    device_name: deviceName,
  };

  const handleSubmit = () => {
    dispatch(register(formData));
  };

  return (
    <SafeArea>
      <WelcomeContainer>
        <Text>Fobbo</Text>
        <AuthContainer>
          <Spacer position="bottom" size="medium">
            <TouchableOpacity onPress={handleSubmit}>
              <Text variant="brand">Continue as a guest</Text>
            </TouchableOpacity>
          </Spacer>
          <Button
            onTouch={() => navigation.navigate("Register")}
            text="Register"
          />
          <Spacer position="top" size="medium">
            <Row>
              <Spacer position="right" size="medium">
                <Text variant="label">Dou you have an account?</Text>
              </Spacer>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text variant="brand">Login</Text>
              </TouchableOpacity>
            </Row>
          </Spacer>
        </AuthContainer>
      </WelcomeContainer>
    </SafeArea>
  );
};
