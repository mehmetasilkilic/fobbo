import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

import { Text } from "../typography/text.component";

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid = Platform.OS === "android";

export const CompactPlaceInfo = ({ place }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;

  return (
    <Item>
      <Image source={{ uri: place.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {place.name}
      </Text>
    </Item>
  );
};
