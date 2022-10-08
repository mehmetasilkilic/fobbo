import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import * as Device from "expo-device";

import { login } from "../../../store/user/user.service";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Button } from "../../../components/button/button.component";

import {
  LoginFormContainer,
  Input,
  Row,
  AgreementText,
} from "./loginForm.styles";

export const LoginForm = ({ errorToast, goForgetPassword, goRegister }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const onSubmit = (formData) => {
    formData.device_name = `${Device.brand}-${Device.modelName}`;
    dispatch(login(formData));
  };

  setTimeout(() => {
    if (error) {
      errorToast();
    }
  }, 0);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      device_name: "",
    },
  });

  return (
    <LoginFormContainer>
      <Spacer position="bottom" size="medium">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="email"
              label="Email"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              outlineColor="#dddddd"
              activeOutlineColor="#f00062"
            />
          )}
          name="email"
        />
        {errors.email && <Text variant="error">This is required.</Text>}
      </Spacer>
      <Spacer position="bottom" size="large">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry
              label="Password"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              outlineColor="#dddddd"
              activeOutlineColor="#f00062"
            />
          )}
          name="password"
        />
        {errors.password && <Text variant="error">This is required.</Text>}
      </Spacer>
      <Button text="Login" onTouch={handleSubmit(onSubmit)} />
      <Spacer position="top" size="medium">
        <TouchableOpacity onPress={goForgetPassword}>
          <AgreementText variant="brand">Forgot Password?</AgreementText>
        </TouchableOpacity>
      </Spacer>
      <Spacer position="top" size="medium">
        <Row>
          <Spacer position="right" size="medium">
            <Text variant="label">Don't have an account?</Text>
          </Spacer>
          <TouchableOpacity onPress={goRegister}>
            <AgreementText variant="brand">Register</AgreementText>
          </TouchableOpacity>
        </Row>
      </Spacer>
    </LoginFormContainer>
  );
};
