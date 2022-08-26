import styled from "styled-components/native";

export const ProfileContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const AccountInfo = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[2]};
`;

export const RowNoBorder = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[2]};
`;

export const InlineRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.View``;

export const ProfilePicture = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const Info = styled.View`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
