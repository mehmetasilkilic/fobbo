import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { setUser } from "../../../store/user/user.slice";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { authService } from "../../../services";

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
    },
  });

  const setAccessToken = async (value) => {
    try {
      await AsyncStorage.setItem(
        "accessToken",
        value?.payload?.access_token ?? null
      );
    } catch (e) {
      // save error
    }
    console.log("Done.");
  };

  const onSubmit = (formData) => {
    console.log(formData);
    try {
      authService
        .login({
          email: formData.email,
          password: formData.password,
          device_name: "iphone11",
        })
        .then((res) => {
          if (res?.status === 200) {
            const response = res.data;
            console.log("response", response);
            setAccessToken(response);

            dispatch(setUser(response?.payload?.user));
          } else {
            console.log("login error");
          }
        });
    } catch (error) {
      console.log(error);
    }
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
