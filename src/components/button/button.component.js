import { Text } from "../typography/text.component";

import { useSelector } from "react-redux";

import { Loading } from "../loading/loading.component";

import { StartButton } from "./button.styles";

export const Button = ({ onTouch, text }) => {
  const isLoading = useSelector((state) => state.user.loading);

  return (
    <StartButton onPress={onTouch} disabled={isLoading}>
      {isLoading ? (
        <>
          <Text variant="brand">.</Text>
          <Loading variant="button" />
        </>
      ) : (
        <Text variant="titleSmall">{text}</Text>
      )}
    </StartButton>
  );
};
