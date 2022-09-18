import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";

import { removeError } from "../../../store/user/user.slice";

import { Text } from "../../../components/typography/text.component";

import { AuthOptions } from "../components/authOptions.component";
import { RegisterForm } from "../components/registerForm.component";

import { errorToastConfig } from "../../../utils/errorToastConfig";

import {
  TopBackground,
  RegisterContainer,
  MidRow,
  OrContainer,
  TopBar,
  Title,
  Column,
} from "./register.styles";

export const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const nav = () => navigation.navigate("Onboarding");
  const goLogin = () => navigation.navigate("Login");

  const error = useSelector((state) => state.user.error);
  const showToast = () => {
    Toast.show({
      type: "error",
      text1: error,
    });
    dispatch(removeError());
  };

  return (
    <>
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
              <Text variant="titleMedium">Register</Text>
              <Text variant="titleSmall">
                Sign up to discover amazing places around you
              </Text>
            </TopBar>
          </TopBackground>
          <Column>
            <RegisterForm errorToast={showToast} />
            <MidRow>
              <OrContainer>
                <Text variant="whiteButton">OR</Text>
              </OrContainer>
            </MidRow>
            <AuthOptions onTouch={nav} goLogin={goLogin} page="register" />
          </Column>
        </RegisterContainer>
      </ScrollView>
      <Toast config={errorToastConfig} />
    </>
  );
};
