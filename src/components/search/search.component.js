import { useContext, useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

import { LocationContext } from "../../services/location/location.context";

import { SearchContainer, SearchAll, Filter } from "./search.styles";

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
      <Filter>
        <AntDesign name="filter" size={24} color={"white"} />
      </Filter>
    </SearchContainer>
  );
};
