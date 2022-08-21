import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";

export const ReviewCardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${(props) => props.theme.space[2]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.disabled};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Column = styled.View``;

export const ImageColumn = styled.View`
  width: 12%;
`;

export const ReviewColumn = styled.View`
  width: 88%;
`;

export const ProfilePicture = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

export const StarRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const ReviewButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[1]};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.brand.primary};
`;

export const ReviewButtonToggled = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[1]};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.brand.primary};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const ButtonText = styled(Text)`
  text-align: center;
  min-width: 35px;
`;
