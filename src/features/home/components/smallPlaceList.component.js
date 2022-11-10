import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { PlaceInfoCard } from "../../../components/place/placeInfoCard.components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { PlaceModal } from "../../../components/placeModal/placeModal.component";

import {
  SmallPlaceListContainer,
  Row,
  InlineRow,
} from "./smallPlaceList.styles";

export const SmallPlaceList = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState([]);

  const openModal = (placeData) => {
    setVisible(true);
    setModalData(placeData);
  };
  return (
    <>
      <Row>
        <Text variant="boldLabel">Most Popular</Text>
        <InlineRow>
          <Text variant="error">26 Places </Text>
          <AntDesign name="doubleright" size={10} color="#ED0F7E" />
        </InlineRow>
      </Row>
      <SmallPlaceListContainer>
        {data.slice(0, 4).map((item, index) => (
          <TouchableOpacity key={index} onPress={() => openModal(item)}>
            <Spacer position="bottom" size="medium">
              <PlaceInfoCard place={item} cardStyle="small" />
            </Spacer>
          </TouchableOpacity>
        ))}
      </SmallPlaceListContainer>
      <PlaceModal
        closeModal={() => setVisible(false)}
        visible={visible}
        data={modalData}
      />
    </>
  );
};
