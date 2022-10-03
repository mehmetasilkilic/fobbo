import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import * as Device from "expo-device";

import { register } from "../../../store/user/user.service";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Button } from "../../../components/button/button.component";

import {
  RegisterFormContainer,
  AgreementText,
  Input,
  Row,
} from "./registerForm.styles";

export const RegisterForm = ({ errorToast, goLogin, passwordErrorToast }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (formData) => {
    if (control._fields.password._f.value === confirmPassword) {
      formData.device_name = `${Device.brand}-${Device.modelName}`;
      dispatch(register(formData));
    } else {
      passwordErrorToast();
    }
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
      name: "",
      email: "",
      password: "",
      device_name: "",
    },
  });

  return (
    <RegisterFormContainer>
      <Spacer position="bottom" size="medium">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text variant="error">This is required.</Text>}
      </Spacer>

      <Spacer position="bottom" size="medium">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text variant="error">This is required.</Text>}
      </Spacer>

      <Spacer position="bottom" size="medium">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry
              placeholder="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text variant="error">This is required.</Text>}
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Input
          placeholder="password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          secureTextEntry
        />
      </Spacer>
      <Button text="Submit" onTouch={handleSubmit(onSubmit)} />
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="label">Dou you have an account? </Text>
          <TouchableOpacity onPress={goLogin}>
            <AgreementText variant="brand">Login</AgreementText>
          </TouchableOpacity>
        </Row>
      </Spacer>
    </RegisterFormContainer>
  );
};
