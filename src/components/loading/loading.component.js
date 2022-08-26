import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingCircle = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const Loading = () => (
  <LoadingContainer>
    <LoadingCircle size={50} animating={true} color="#f00062" />
  </LoadingContainer>
);
