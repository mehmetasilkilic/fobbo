import { TouchableOpacity } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AdvertisementFlatList,
  CompactImage,
} from "./advertisementList.styles";

export const AdvertisementList = ({ data }) => (
  <AdvertisementFlatList
    keyboardShouldPersistTaps="handled"
    ListFooterComponent={<Spacer position="left" size="medium" />}
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => {
      return (
        <Spacer position="left" size="medium">
          <TouchableOpacity>
            <CompactImage source={{ uri: item.url }} />
          </TouchableOpacity>
        </Spacer>
      );
    }}
    keyExtractor={(item) => item.name.split(" ").join("")}
  />
);
