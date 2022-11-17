import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import { useTranslations } from "../../../utils/useTranslations";

import { login } from "../../../store/user/user.service";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Button } from "../../../components/button/button.component";

import {
  ForgetPasswordFormContainer,
  Input,
} from "./forgetPasswordForm.styles";

export const ForgetPasswordForm = ({ errorToast, goLogin }) => {
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
      code: "",
      password: "",
    },
  });

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <ForgetPasswordFormContainer>
      <Spacer position="bottom" size="large">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="email"
              label={t.auth.email}
              keyboardType="email-address"
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              outlineColor="#dddddd"
              activeOutlineColor="#ED0F7E"
            />
          )}
          name="email"
        />
        {errors.email && <Text variant="error">This is required.</Text>}
      </Spacer>
      <Button text={t.auth.send} onTouch={handleSubmit(onSubmit)} />
    </ForgetPasswordFormContainer>
  );
};
