import styled from "styled-components/native";

export const ActionContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const TopBar = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.brand.primary};
  justify-content: space-between;
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
