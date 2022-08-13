import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const HeaderContainer = styled.View`
  min-height: 100px;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text.secondary};
  max-width: 80%;
`;

export const RatingContainer = styled.View``;

export const RatingContainerTop = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 65px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: ${(props) => props.theme.space[1]};
`;

export const RatingContainerBottom = styled.View`
  align-items: center;
  background-color: ${(props) => props.theme.colors.brand.secondary};
  width: 65px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: ${(props) => props.theme.space[1]};
`;
