import styled from "styled-components/native";

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.ui.disabled};
  padding-vertical: ${(props) => props.theme.space[3]};
  padding-horizontal: ${(props) => props.theme.space[2]};
`;

export const InlineRow = styled.View`
  flex-direction: row;
  align-items: center;
`;
