import { FlatList } from "react-native";
import styled from "styled-components/native";

export const AdvertisementFlatList = styled(FlatList)`
  flex-grow: 0;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.ui.disabled};
  padding-vertical: ${(props) => props.theme.space[2]};
`;

export const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.space[1]};
  width: 160px;
  height: 200px;
`;
