import styled from "styled-components/native";

export const SmallPlaceListContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: ${(props) => props.theme.space[2]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.ui.disabled};
  padding: ${(props) => props.theme.space[2]};
`;

export const InlineRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
