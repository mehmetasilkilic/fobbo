import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

import { useTranslations } from "../../../utils/useTranslations";

import { removeError } from "../../../store/user/user.slice";

import { Text } from "../../../components/typography/text.component";

import { ForgetPasswordForm } from "../components/forgetPasswordForm.component";

import { errorToastConfig } from "../../../utils/errorToastConfig";

import {
  TopBackground,
  ForgetPasswordContainer,
  TopBar,
  Title,
  Column,
} from "./forgetPassword.styles";

export const ForgetPassword = ({ navigation }) => {
  const dispatch = useDispatch();

  const goLogin = () => navigation.navigate("Login");

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
        <ForgetPasswordContainer>
          <TopBackground>
            <TopBar>
              <Title>
                <Text variant="fobbo">fobbo</Text>
              </Title>
              <Text variant="titleMedium">{t.auth.forgetYourPass}</Text>
              <Text variant="titleSmall">{t.auth.forgetPassMsg}</Text>
            </TopBar>
          </TopBackground>
          <Column>
            <ForgetPasswordForm errorToast={showToast} goLogin={goLogin} />
          </Column>
        </ForgetPasswordContainer>
      </ScrollView>
      <Toast config={errorToastConfig} />
    </>
  );
};
