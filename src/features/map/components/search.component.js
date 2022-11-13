import { useDispatch, useSelector } from "react-redux";

import { useTranslations } from "../../../utils/useTranslations";

import {
  fetchLocation,
  setKeyword,
} from "../../../store/location/location.slice";

import { SearchContainer, SearchMap } from "./search.styles";

export const Search = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.location.keyword);

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <SearchContainer>
      <SearchMap
        placeholder={t.place.searchPlaceHolder}
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
