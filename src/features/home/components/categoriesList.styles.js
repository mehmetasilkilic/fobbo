import { FlatList } from "react-native";
import styled from "styled-components/native";

export const CategoriesFlatList = styled(FlatList)`
  flex-grow: 0;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.ui.disabled};
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const CompactImage = styled.Image`
  border-radius: 50px;
  width: 60px;
  height: 60px;
`;

export const CategoryContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
