import styled from "styled-components/native";
import WebView from "react-native-webview";

export const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.space[2]};
  width: 120px;
  height: 100px;
`;

export const CompactWebView = styled(WebView)`
  border-radius: ${(props) => props.theme.space[2]};
  width: 120px;
  height: 100px;
`;
