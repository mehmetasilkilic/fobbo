import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useTranslations } from "../../utils/useTranslations";

import { SearchContainer, SearchAll } from "./search.styles";
import { Spacer } from "../spacer/spacer.component";

export const Search = ({ onType }) => {
  const { t, status } = useTranslations();

  if (status === "loading") return <></>;
  return (
    <SearchContainer>
      <SearchAll
        placeholder={t.place.searchPlaceHolder}
        iconColor="#ED0F7E"
        onChangeText={(text) => onType(text)}
      />
      <Spacer position="right" size="medium">
        <TouchableOpacity>
          <AntDesign name="filter" size={24} color={"#ED0F7E"} />
        </TouchableOpacity>
      </Spacer>
    </SearchContainer>
  );
};
