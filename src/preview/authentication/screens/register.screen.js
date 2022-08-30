import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

import { removeError } from "../../../store/user/user.slice";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { AuthOptions } from "../components/authOptions.component";
import { Agreements } from "../components/agreements.component";
import { RegisterForm } from "../components/registerForm.component";

import { errorToastConfig } from "../../../utils/errorToastConfig";

import { RegisterContainer, MidRow, OrContainer } from "./register.styles";

export const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const nav = () => navigation.navigate("Onboarding");
  const goLogin = () => navigation.navigate("Login");

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
      <RegisterContainer>
        <Text variant="titleBig">Welcome to Fobbo</Text>
        <View>
          <RegisterForm errorToast={showToast} />
          <MidRow>
            <OrContainer>
              <Text variant="whiteButton">OR</Text>
            </OrContainer>
          </MidRow>
          <AuthOptions onTouch={nav} goLogin={goLogin} page="register" />
        </View>
        <Agreements />
      </RegisterContainer>
      <Toast config={errorToastConfig} />
    </SafeArea>
  );
};
