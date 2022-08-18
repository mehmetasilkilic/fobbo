import { FlatList } from "react-native";
import styled from "styled-components/native";

export const AdvertisementFlatList = styled(FlatList)`
  flex-grow: 0;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.ui.disabled};
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const CompactImage = styled.Image`
  border-radius: 5px;
  width: 160px;
  height: 200px;
`;
