import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const HomeScrollView = styled(ScrollView).attrs({
  contentContainerStyle: { paddingBottom: 80 },
})``;

export const AdvertisementImageWrapper = styled.View`
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]}; ;
`;

export const AdvertisementImage = styled.Image`
  padding: ${(props) => props.theme.space[2]};
  height: 200px;
  border-radius: ${(props) => props.theme.space[2]}; ;
`;
