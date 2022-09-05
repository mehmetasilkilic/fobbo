import { useState, useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

import { fetchPlaces, removePlaces } from "../../../store/places/places.slice";
import { buildQuery } from "../../../utils/buildQuery";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Search } from "../../../components/search/search.component";
import { Loading } from "../../../components/loading/loading.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { PlacesList, PlacesContainer, Row, InnerRow } from "./places.styles";

export const PlacesScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const didMountRef = useRef(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [value] = useDebounce(name, 500);

  const formData = {
    name: name,
  };

  const onType = (text) => {
    setName(text);
  };

  useEffect(() => {
    if (didMountRef.current) {
      dispatch(removePlaces());
      dispatch(fetchPlaces(buildQuery(formData) + "&include=images&page=1"));
    } else {
      didMountRef.current = true;
    }
  }, [value]);

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    dispatch(
      fetchPlaces(buildQuery(formData) + `&include=images&page=${currentPage}`)
    );
  }, [currentPage]);

  const places = useSelector((state) => state.places.placesList);
  const isLoading = useSelector((state) => state.places.loading);
  const [toggleAppearance, setToggleAppearance] = useState(false);

  return (
    <SafeArea>
      {isLoading && <Loading color="#f00062" />}
      <Search onType={onType} />
      <Row>
        <Text variant="label">Trending</Text>
        <InnerRow>
          <Spacer position="right" size="medium">
            <Text variant="caption">Appearance</Text>
          </Spacer>
          <TouchableOpacity
            onPress={() => {
              setToggleAppearance(!toggleAppearance);
            }}
          >
            <AntDesign
              name={toggleAppearance ? "appstore-o" : "laptop"}
              size={24}
              color={"#f00062"}
            />
          </TouchableOpacity>
        </InnerRow>
      </Row>
      <PlacesContainer>
        <PlacesList
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.9}
          ListFooterComponent={
            isLoading ? <Loading size="button" color="#f00062" /> : ""
          }
          keyboardShouldPersistTaps="handled"
          numColumns={toggleAppearance ? 1 : 2}
          key={toggleAppearance ? 1 : 2}
          data={places}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PlaceDetail", {
                    place: item,
                  })
                }
              >
                <Spacer position="bottom" size="medium">
                  <PlaceInfoCard
                    place={item}
                    cardStyle={toggleAppearance ? "vertical" : "small"}
                  />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </PlacesContainer>
    </SafeArea>
  );
};
