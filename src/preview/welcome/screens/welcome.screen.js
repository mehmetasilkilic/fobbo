import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as Device from "expo-device";
import { FontAwesome } from "@expo/vector-icons";

import { useTranslations } from "../../../utils/useTranslations";

import { register } from "../../../store/user/user.service";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Button } from "../../../components/button/button.component";

import { AuthOptions } from "../components/authOptions.component";
import { Agreements } from "../components/agreements.component";

import {
  AuthContainer,
  WelcomeContainer,
  AgreementText,
  Row,
  MidRow,
  OrContainer,
} from "./welcome.styles";

export const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();

  const nav = () => navigation.navigate("Login");
  const goLanguage = () => navigation.navigate("Language");
  const goLogin = () => navigation.navigate("Login");

  const deviceName = `${Device.brand}-${Device.modelName}`;

  const formData = {
    device_name: deviceName,
  };

  const handleGuestRegister = () => {
    dispatch(register(formData));
  };

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;
  /* onPress={goLanguage} */
  return (
    <SafeArea>
      <ExpoStatusBar style="auto" />
      <WelcomeContainer>
        <Row>
          <TouchableOpacity onPress={goLanguage}>
            <FontAwesome name="language" size={30} color="#ED0F7E" />
          </TouchableOpacity>
        </Row>
        <Text variant="fobboLogo">fobbo</Text>
        <AuthContainer>
          <Spacer position="bottom" size="medium">
            <TouchableOpacity onPress={handleGuestRegister}>
              <AgreementText variant="brand">
                {t.auth.continueAsAGuest}
              </AgreementText>
            </TouchableOpacity>
          </Spacer>
          <Button
            onTouch={() => navigation.navigate("Register")}
            text={t.auth.signUp}
          />
          <Spacer position="bottom" size="large" />
          <MidRow>
            <OrContainer>
              <Text variant="whiteButton">&</Text>
            </OrContainer>
          </MidRow>
          <AuthOptions onTouch={nav} goLogin={goLogin} />
          <Agreements />
        </AuthContainer>
      </WelcomeContainer>
    </SafeArea>
  );
};
