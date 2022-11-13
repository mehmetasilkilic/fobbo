import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useTranslations } from "../../../utils/useTranslations";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { PlaceModal } from "../../../components/placeModal/placeModal.component";

import { PlacesFlatList, Row, InlineRow } from "./horizontalPlaceList.styles";

export const HorizontalPlaceList = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState([]);

  const openModal = (placeData) => {
    setVisible(true);
    setModalData(placeData);
  };

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <>
      <Row>
        <Text variant="boldLabel">{t.home.trending}</Text>
        <InlineRow>
          <Text variant="error">{t.home.viewAll}</Text>
          <AntDesign name="doubleright" size={10} color="#ED0F7E" />
        </InlineRow>
      </Row>
      <PlacesFlatList
        keyboardShouldPersistTaps="handled"
        ListFooterComponent={<Spacer position="left" size="medium" />}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Spacer position="left" size="medium">
              <TouchableOpacity onPress={() => openModal(item)}>
                <PlaceInfoCard place={item} cardStyle="horizontal" />
              </TouchableOpacity>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name.split(" ").join("")}
      />
      <PlaceModal
        closeModal={() => setVisible(false)}
        visible={visible}
        data={modalData}
      />
    </>
  );
};
