import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[2]};
`;

export const SearchAll = styled(Searchbar)`
  width: 89%;
`;
