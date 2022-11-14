import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

import { useTranslations } from "../../../utils/useTranslations";

import { removeError } from "../../../store/user/user.slice";

import { Text } from "../../../components/typography/text.component";

import { LoginForm } from "../components/loginForm.component";

import { errorToastConfig } from "../../../utils/errorToastConfig";

import {
  TopBackground,
  LoginContainer,
  TopBar,
  Title,
  Column,
} from "./login.styles";

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const goForgetPassword = () => navigation.navigate("ForgetPassword");
  const goRegister = () => navigation.navigate("Register");

  const error = useSelector((state) => state.user.error);
  const showToast = () => {
    Toast.show({
      type: "error",
      text1: error,
    });
    dispatch(removeError());
  };

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <>
      <ExpoStatusBar style="light" />
      <ScrollView
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps="handled"
      >
        <LoginContainer>
          <TopBackground>
            <TopBar>
              <Title>
                <Text variant="fobbo">fobbo</Text>
              </Title>
              <Text variant="titleMedium">{t.auth.signIn}</Text>
              <Text variant="titleSmall">{t.auth.loginMsg}</Text>
            </TopBar>
          </TopBackground>
          <Column>
            <LoginForm
              errorToast={showToast}
              goForgetPassword={goForgetPassword}
              goRegister={goRegister}
            />
          </Column>
        </LoginContainer>
      </ScrollView>
      <Toast config={errorToastConfig} />
    </>
  );
};
