import styled from "styled-components/native";

export const ActionContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;

export const TopBar = styled.View`
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-top: ${(props) => props.theme.space[1]};
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.brand.primary};
  justify-content: flex-start;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SliderContainer = styled.View`
  margin: ${(props) => props.theme.space[2]};
  border-radius: 5px;
  overflow: hidden;
`;