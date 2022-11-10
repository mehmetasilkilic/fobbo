import { useDispatch, useSelector } from "react-redux";

import {
  fetchLocation,
  setKeyword,
} from "../../../store/location/location.slice";

import { SearchContainer, SearchMap } from "./search.styles";

export const Search = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.location.keyword);

  return (
    <SearchContainer>
      <SearchMap
        placeholder="Search for a location"
        icon="map"
        iconColor="#ED0F7E"
        onSubmitEditing={() => {
          dispatch(fetchLocation(keyword));
        }}
        onChangeText={(text) => {
          dispatch(setKeyword(text));
        }}
      />
    </SearchContainer>
  );
};
