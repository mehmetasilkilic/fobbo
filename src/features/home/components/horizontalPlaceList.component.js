import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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

  return (
    <>
      <Row>
        <Text variant="boldLabel">Trending this week</Text>
        <InlineRow>
          <Text variant="error">View all </Text>
          <AntDesign name="doubleright" size={10} color="#f00062" />
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
