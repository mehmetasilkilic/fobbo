import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const SearchMap = styled(Searchbar)`
  height: 40px;
`;