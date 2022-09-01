import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { TouchableOpacity } from "react-native";

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
    },
  });

  return (
    <ForgetPasswordFormContainer>
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
      <Button text="Submit" onTouch={handleSubmit(onSubmit)} />
      <Spacer position="top" size="medium">
        <TouchableOpacity onPress={goLogin}>
          <Text variant="brand">Go to Login Page</Text>
        </TouchableOpacity>
      </Spacer>
    </ForgetPasswordFormContainer>
  );
};
