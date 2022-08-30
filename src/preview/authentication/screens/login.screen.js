import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

import { removeError } from "../../../store/user/user.slice";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { AuthOptions } from "../components/authOptions.component";
import { LoginForm } from "../components/loginForm.component";

import { errorToastConfig } from "../../../utils/errorToastConfig";

import { LoginContainer, MidRow, OrContainer } from "./login.styles";

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
    <SafeArea>
      <LoginContainer>
        <View>
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
        </View>
      </LoginContainer>
      <Toast config={errorToastConfig} />
    </SafeArea>
  );
};
