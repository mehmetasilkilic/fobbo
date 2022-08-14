import styled from "styled-components/native";

export const PlaceDetailContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.disabled};
`;

export const Types = styled.View`
  flex-direction: row;
`;
