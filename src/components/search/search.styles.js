import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[2]};
`;

export const Filter = styled(TouchableOpacity)`
  width: 10%;
  align-items: center;
`;

export const SearchAll = styled(Searchbar)`
  width: 90%;
`;
