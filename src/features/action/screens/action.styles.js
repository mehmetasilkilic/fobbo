import styled from "styled-components/native";

export const ActionContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const TopBar = styled.View`
  padding: ${(props) => props.theme.space[2]};
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: flex-start;
  align-items: center;
`;

export const SliderContainer = styled.View`
  margin: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
  overflow: hidden;
`;
