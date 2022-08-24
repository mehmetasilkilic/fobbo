import { useContext, useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { LocationContext } from "../../services/location/location.context";

import { SearchContainer, SearchAll } from "./search.styles";
import { Spacer } from "../spacer/spacer.component";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchAll
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
      <Spacer position="right" size="medium">
        <TouchableOpacity>
          <AntDesign name="filter" size={24} color={"#9C1F19"} />
        </TouchableOpacity>
      </Spacer>
    </SearchContainer>
  );
};
