import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { ScrollView } from "react-native";

import { removeError } from "../../../store/user/user.slice";

import { Text } from "../../../components/typography/text.component";

import { AuthOptions } from "../components/authOptions.component";
import { LoginForm } from "../components/loginForm.component";

import { errorToastConfig } from "../../../utils/errorToastConfig";

import {
  TopBackground,
  LoginContainer,
  MidRow,
  OrContainer,
  TopBar,
  Title,
} from "./login.styles";

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const nav = () => navigation.navigate("Onboarding");
  const goLogin = () => navigation.navigate("Login");
  const goRegister = () => navigation.navigate("Register");

  const error = useSelector((state) => state.user.error);
  const showToast = () => {
    console.log("text", error);
    Toast.show({
      type: "error",
      text1: error,
    });
    dispatch(removeError());
  };

  return (
    <>
      <ScrollView alwaysBounceVertical={false}>
        <LoginContainer>
          <TopBackground>
            <TopBar>
              <Title>
                <Text variant="titleMedium">fobbo</Text>
              </Title>
              <Text variant="titleMedium">Login</Text>
              <Text variant="titleSmall">
                Sign in to discover amazing places around you
              </Text>
            </TopBar>
          </TopBackground>
          <LoginForm errorToast={showToast} />
          <MidRow>
            <OrContainer>
              <Text variant="whiteButton">OR</Text>
            </OrContainer>
          </MidRow>
          <AuthOptions
            onTouch={nav}
            goLogin={goLogin}
            goRegister={goRegister}
          />
        </LoginContainer>
      </ScrollView>
      <Toast config={errorToastConfig} />
    </>
  );
};
