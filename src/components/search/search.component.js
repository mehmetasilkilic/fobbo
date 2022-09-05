import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { SearchContainer, SearchAll } from "./search.styles";
import { Spacer } from "../spacer/spacer.component";

export const Search = ({ onType }) => {
  return (
    <SearchContainer>
      <SearchAll
        placeholder="Search for a location"
        iconColor="#f00062"
        onChangeText={(text) => onType(text)}
      />
      <Spacer position="right" size="medium">
        <TouchableOpacity>
          <AntDesign name="filter" size={24} color={"#f00062"} />
        </TouchableOpacity>
      </Spacer>
    </SearchContainer>
  );
};
