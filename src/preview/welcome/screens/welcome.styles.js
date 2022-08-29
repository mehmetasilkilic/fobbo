import styled from "styled-components/native";

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AuthContainer = styled.View`
  position: absolute;
  bottom: ${(props) => props.theme.space[2]};
  justify-content: center;
  align-items: center;
`;
