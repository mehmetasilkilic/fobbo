import styled from "styled-components";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const AdvertisementImageWrapper = styled.View`
  padding-right: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  border-radius: 5px;
`;

export const AdvertisementImage = styled.Image`
  padding: ${(props) => props.theme.space[2]};
  height: 200px;
  border-radius: 5px;
`;
