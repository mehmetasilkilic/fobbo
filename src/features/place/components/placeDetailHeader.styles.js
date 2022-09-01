import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const HeaderContainer = styled.View`
  min-height: 100px;
  padding-right: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Types = styled.View`
  flex-direction: row;
`;

export const Title = styled(Text)`
  max-width: 80%;
`;

export const RatingContainer = styled.View`
  border-radius: ${(props) => props.theme.space[2]}; ;
`;

export const RatingContainerTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.brand.secondary};
  width: 65px;
  border-top-left-radius: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[1]};
`;

export const RatingContainerBottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  width: 65px;
  border-bottom-right-radius: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[1]};
`;

export const IfOpen = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.disabled};
  color: ${(props) => props.theme.colors.ui.success};
  width: 90px;
  height: 25px;
  border-bottom-right-radius: ${(props) => props.theme.space[2]};
  border-top-left-radius: ${(props) => props.theme.space[2]}; ;
`;
