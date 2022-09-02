import { useSelector, useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { ScrollView } from "react-native";

import { removeError } from "../../../store/user/user.slice";

import { Text } from "../../../components/typography/text.component";

import { ChangePasswordForm } from "../components/changePasswordForm.component";

import { errorToastConfig } from "../../../utils/errorToastConfig";

import {
  TopBackground,
  ChangePasswordContainer,
  TopBar,
  Title,
  Column,
} from "./changePassword.styles";

export const ChangePassword = ({ navigation }) => {
  const dispatch = useDispatch();

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
    <>
      <ScrollView
        alwaysBounceVertical={false}
        keyboardShouldPersistTaps="handled"
      >
        <ChangePasswordContainer>
          <TopBackground>
            <TopBar>
              <Title>
                <Text variant="titleMedium">fobbo</Text>
              </Title>
              <Text variant="titleMedium">Change Your Password</Text>
              <Text variant="titleSmall">
                You will be logged out after you have changed your password.
              </Text>
            </TopBar>
          </TopBackground>
          <Column>
            <ChangePasswordForm errorToast={showToast} goLogin={goLogin} />
          </Column>
        </ChangePasswordContainer>
      </ScrollView>
      <Toast config={errorToastConfig} />
    </>
  );
};
