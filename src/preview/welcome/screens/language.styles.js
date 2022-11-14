import styled from "styled-components/native";

export const LanguageContainer = styled.View`
  flex: 1;
  padding-top: ${(props) => props.theme.space[3]};
`;

export const InnerContainer = styled.View`
  margin-horizontal: ${(props) => props.theme.space[2]};
  padding-vertical: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[3]};
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
