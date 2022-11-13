import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native";

import { useTranslations } from "../../../utils/useTranslations";

import { login } from "../../../store/user/user.service";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Button } from "../../../components/button/button.component";

import {
  ChangePasswordFormContainer,
  Input,
} from "./changePasswordForm.styles";

export const ChangePasswordForm = ({ errorToast, goLogin }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const onSubmit = (formData) => {
    // dispatch(login(formData));
    console.log(formData);
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
    },
  });

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <ChangePasswordFormContainer>
      <Spacer position="bottom" size="medium">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              secureTextEntry
              label={t.profile.currentPassword}
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              outlineColor="#dddddd"
              activeOutlineColor="#ED0F7E"
            />
          )}
          name="password"
        />
        {errors.password && <Text variant="error">This is required.</Text>}
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
              label={t.profile.newPassword}
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              outlineColor="#dddddd"
              activeOutlineColor="#ED0F7E"
            />
          )}
          name="password"
        />
        {errors.password && <Text variant="error">This is required.</Text>}
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Input
          secureTextEntry
          label={t.profile.confirmPassword}
          mode="outlined"
          autoCapitalize="none"
          outlineColor="#dddddd"
          activeOutlineColor="#ED0F7E"
        />
      </Spacer>
      <Button text="Change Password" onTouch={handleSubmit(onSubmit)} />
    </ChangePasswordFormContainer>
  );
};
