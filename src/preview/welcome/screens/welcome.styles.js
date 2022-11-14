import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";

const Width = Dimensions.get("window").width;

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
`;

export const AuthContainer = styled.View`
  position: absolute;
  bottom: ${(props) => props.theme.space[2]};
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  position: absolute;
  top: 20px;
  right: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const MidRow = styled.View`
  width: ${Width - 20}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.text.disabled};
  justify-content: center;
  align-items: center;
  margin-vertical: ${(props) => props.theme.space[3]};
`;

export const OrContainer = styled.View`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.text.primary};
  justify-content: center;
  align-items: center;
`;

export const AgreementText = styled(Text)`
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.colors.ui.primary};
`;
