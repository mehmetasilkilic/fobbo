import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";

import { useTranslations } from "../../../utils/useTranslations";

import { removeError } from "../../../store/user/user.slice";

import { Text } from "../../../components/typography/text.component";

import { RegisterForm } from "../components/registerForm.component";

import { errorToastConfig } from "../../../utils/errorToastConfig";

import {
  TopBackground,
  RegisterContainer,
  TopBar,
  Title,
  Column,
} from "./register.styles";

export const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const goLogin = () => navigation.navigate("Login");

  const error = useSelector((state) => state.user.error);

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: error,
    });
    dispatch(removeError());
  };

  const showPasswordErrorToast = () => {
    Toast.show({
      type: "error",
      text1: t.error.passMatch,
    });
    dispatch(removeError());
  };

  return (
    <>
      <ExpoStatusBar style="light" />
      <ScrollView
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps="handled"
      >
        <RegisterContainer>
          <TopBackground>
            <TopBar>
              <Title>
                <Text variant="fobbo">fobbo</Text>
              </Title>
              <Text variant="titleMedium">{t.auth.signUp}</Text>
              <Text variant="titleSmall">{t.auth.registerMsg}</Text>
            </TopBar>
          </TopBackground>
          <Column>
            <RegisterForm errorToast={showToast} goLogin={goLogin} />
          </Column>
        </RegisterContainer>
      </ScrollView>
      <Toast
        config={errorToastConfig}
        passwordErrorToast={showPasswordErrorToast}
      />
    </>
  );
};
