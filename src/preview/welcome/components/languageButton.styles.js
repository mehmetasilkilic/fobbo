import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const Icon = styled(MaterialIcons).attrs((props) => ({
  color: props.theme.colors.text.primary,
}))``;
