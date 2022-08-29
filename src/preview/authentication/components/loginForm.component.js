import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import { login } from "../../../store/user/user.slice";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { Input, TitleContainer, ButtonBig } from "./loginForm.styles";

export const LoginForm = () => {
  const dispatch = useDispatch();

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

  const onSubmit = (formData) => {
    dispatch(login(formData));
  };

  return (
    <View>
      <TitleContainer>
        <Spacer position="bottom" size="medium">
          <Text variant="titleBrandMedium">Login</Text>
        </Spacer>
      </TitleContainer>
      <Spacer position="bottom" size="medium">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="email"
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
              secureTextEntry={true}
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
      <ButtonBig onPress={handleSubmit(onSubmit)}>
        <Text variant="titleSmall">Login</Text>
      </ButtonBig>
    </View>
  );
};
