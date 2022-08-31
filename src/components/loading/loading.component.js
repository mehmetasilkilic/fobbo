import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingCircleBig = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingCircleSmall = styled(ActivityIndicator)`
  margin-left: -13px;
`;

export const Loading = ({ variant }) => {
  const LoadingCircle =
    variant === "button" ? LoadingCircleSmall : LoadingCircleBig;
  return (
    <LoadingContainer>
      <LoadingCircle
        size={variant === "button" ? 26 : 50}
        animating={true}
        color={variant === "button" ? "#ffffff" : "#f00062"}
      />
    </LoadingContainer>
  );
};
