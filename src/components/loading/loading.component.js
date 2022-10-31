import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

const LoadingContainerBig = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingContainerSmall = styled.View`
  position: absolute;
  top: 18%;
  left: 50%;
`;

const LoadingCircleBig = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingCircleSmall = styled(ActivityIndicator)`
  margin-left: -13px;
`;

export const Loading = ({ size, color }) => {
  const LoadingContainer =
    size === "button" ? LoadingContainerSmall : LoadingContainerBig;

  const LoadingCircle =
    size === "button" ? LoadingCircleSmall : LoadingCircleBig;

  return (
    <LoadingContainer>
      <LoadingCircle
        size={size === "button" ? 26 : 50}
        animating={true}
        color={color}
      />
    </LoadingContainer>
  );
};
