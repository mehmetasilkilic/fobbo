import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

import { fetchLocation, setKeyword } from "../../store/location/location.slice";

import { SearchContainer, SearchAll } from "./search.styles";
import { Spacer } from "../spacer/spacer.component";

export const Search = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.location.keyword);

  return (
    <SearchContainer>
      <SearchAll
        placeholder="Search for a location"
        iconColor="#f00062"
        onSubmitEditing={() => {
          dispatch(fetchLocation(keyword));
        }}
        onChangeText={(text) => {
          dispatch(setKeyword(text));
        }}
      />
      <Spacer position="right" size="medium">
        <TouchableOpacity>
          <AntDesign name="filter" size={24} color={"#f00062"} />
        </TouchableOpacity>
      </Spacer>
    </SearchContainer>
  );
};
