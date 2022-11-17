import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import * as Device from "expo-device";

import { useTranslations } from "../../../utils/useTranslations";

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

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

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
              label={t.auth.email}
              keyboardType="email-address"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              outlineColor="#dddddd"
              activeOutlineColor="#ED0F7E"
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
              label={t.auth.username}
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              outlineColor="#dddddd"
              activeOutlineColor="#ED0F7E"
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
              label={t.auth.password}
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              outlineColor="#dddddd"
              activeOutlineColor="#ED0F7E"
            />
          )}
          name="password"
        />
        {errors.password && <Text variant="error">This is required.</Text>}
      </Spacer>
      <Spacer position="bottom" size="large">
        <Input
          secureTextEntry
          label={t.auth.confPass}
          mode="outlined"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          outlineColor="#dddddd"
          activeOutlineColor="#ED0F7E"
        />
      </Spacer>
      <Button text={t.auth.signUp} onTouch={handleSubmit(onSubmit)} />
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="label">{t.auth.alreadyHaveAnAccount}</Text>
          <TouchableOpacity onPress={goLogin}>
            <AgreementText variant="brand">{t.auth.signIn}</AgreementText>
          </TouchableOpacity>
        </Row>
      </Spacer>
    </RegisterFormContainer>
  );
};
