import { Platform } from "react-native";

import { Text } from "../typography/text.component";

import { CompactWebView, CompactImage, Item } from "./compactPlaceInfo.styles";

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
