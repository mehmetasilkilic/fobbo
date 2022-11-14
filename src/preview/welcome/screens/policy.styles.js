import styled from "styled-components/native";

export const PolicyContainer = styled.View`
  flex: 1;
  padding-horizontal: ${(props) => props.theme.space[2]};
`;

export const Row = styled.View`
  padding-horizontal: ${(props) => props.theme.space[2]};
  height: 40px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex: 1;
`;
