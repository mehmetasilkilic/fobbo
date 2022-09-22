import { TouchableOpacity } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  CategoriesFlatList,
  CategoryContainer,
  CompactImage,
} from "./categoriesList.styles";

export const CategoriesList = ({ data }) => (
  <CategoriesFlatList
    keyboardShouldPersistTaps="handled"
    ListFooterComponent={<Spacer position="left" size="medium" />}
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => {
      return (
        <Spacer position="left" size="medium">
          <TouchableOpacity>
            <CategoryContainer>
              <Spacer position="bottom" size="small">
                <CompactImage source={{ uri: item.url }} />
              </Spacer>
              <Text variant="caption">{item.name}</Text>
            </CategoryContainer>
          </TouchableOpacity>
        </Spacer>
      );
    }}
    keyExtractor={(item) => item.name.split(" ").join("")}
  />
);
