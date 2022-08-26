import styled from "styled-components/native";

import { Text } from "../../../components/typography/text.component";

export const AgreementsContainer = styled.View`
  align-items: center;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const AgreementText = styled(Text)`
  padding-bottom: ${(props) => props.theme.space[1]};
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.ui.quaternary};
`;