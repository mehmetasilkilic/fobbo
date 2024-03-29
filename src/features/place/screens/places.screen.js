import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

import { useTranslations } from "../../../utils/useTranslations";

import { fetchPlaces } from "../../../store/places/places.service";
import { removePlaces } from "../../../store/places/places.slice";

import { buildQuery } from "../../../utils/buildQuery";

import { Text } from "../../../components/typography/text.component";
import { SafeAreaSecond } from "../../../components/utils/safeArea.component";
import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Search } from "../../../components/search/search.component";
import { Loading } from "../../../components/loading/loading.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { PlaceModal } from "../../../components/placeModal/placeModal.component";

import {
  PlacesList,
  PlacesContainer,
  Row,
  InnerRow,
  MessageContianer,
} from "./places.styles";

export const PlacesScreen = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.placesList);
  const isLoading = useSelector((state) => state.places.loading);
  const lastPage = useSelector((state) => state.places.lastPage);
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState([]);

  const [toggleAppearance, setToggleAppearance] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState("");
  // useDebounce is to prevent sending a request on every letter type
  const [value] = useDebounce(name, 500);

  const formData = {
    name: name,
  };

  const toggleMessage = () => {
    if (lastPage <= currentPage) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  const onType = (text) => {
    setName(text);
  };

  useEffect(() => {
    setCurrentPage(1);
    setShowMessage(false);

    dispatch(removePlaces());
    dispatch(
      fetchPlaces(
        buildQuery(formData) + "&include=images,comments,isFavorite&page=1"
      )
    );
    toggleMessage();
  }, [value]);

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
    toggleMessage();
  };

  useEffect(() => {
    if (currentPage <= lastPage && currentPage > 1) {
      setShowMessage(false);
      dispatch(
        fetchPlaces(
          buildQuery(formData) +
            `&include=images,comments,isFavorite&page=${currentPage}`
        )
      );
    }
  }, [currentPage]);

  const openModal = (placeData) => {
    setVisible(true);
    setModalData(placeData);
  };

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <>
      <SafeAreaSecond>
        <Search onType={onType} />
        <Row>
          <Text variant="label">{t.place.trending}</Text>
          <InnerRow>
            <Spacer position="right" size="medium">
              <Text variant="caption">{t.place.appearance}</Text>
            </Spacer>
            <TouchableOpacity
              onPress={() => {
                setToggleAppearance(!toggleAppearance);
              }}
            >
              <AntDesign
                name={toggleAppearance ? "appstore-o" : "laptop"}
                size={24}
                color={"#ED0F7E"}
              />
            </TouchableOpacity>
          </InnerRow>
        </Row>
      </SafeAreaSecond>
      <PlacesContainer>
        <PlacesList
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.9}
          ListFooterComponent={
            isLoading ? (
              <Loading size="button" color="#ED0F7E" />
            ) : showMessage ? (
              <MessageContianer>
                <Text variant="error">{t.endOfThePage}</Text>
              </MessageContianer>
            ) : (
              ""
            )
          }
          keyboardShouldPersistTaps="handled"
          numColumns={toggleAppearance ? 1 : 2}
          key={toggleAppearance ? 1 : 2}
          data={places}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => openModal(item)}>
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
      <PlaceModal
        closeModal={() => setVisible(false)}
        visible={visible}
        data={modalData}
      />
    </>
  );
};
