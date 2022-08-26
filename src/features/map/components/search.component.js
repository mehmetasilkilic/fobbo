import { useContext, useState, useEffect } from "react";

import { LocationContext } from "../../../services/location/location.context";

import { SearchContainer, SearchMap } from "./search.styles";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchMap
        placeholder="Search for a location"
        icon="map"
        iconColor="#f00062"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
