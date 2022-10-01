import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, TouchableOpacity, Pressable, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { Favorite } from "../favorites/favorite.component";
import { ImageSlider } from "../imageSlider/imageSlider.component";
import { ModalArea, SafeAreaBottom } from "../utils/safeArea.component";

import { FootTrafficChart } from "./components/footTrafficChart.component";
import { PlaceDetailHeader } from "./components/placeDetailHeader.component";
import { ReviewCard } from "./components/reviewCard.component";
import { CommentForm } from "./components/commentForm.component";

import {
  PlaceDetailContainer,
  Types,
  Row,
  TopBar,
  RowCentered,
} from "./placeModal.styles";

export const PlaceModal = ({ closeModal, visible, data }) => {
  return (
    <Modal visible={visible} animationType={"slide"}>
      <ModalArea>
        <ExpoStatusBar style="light" />
        <TopBar>
          <View>
            <TouchableOpacity onPress={closeModal}>
              <AntDesign name="down" size={24} color={"white"} />
            </TouchableOpacity>
          </View>
          <Types>
            <Spacer position="right" size="large">
              <TouchableOpacity>
                <AntDesign name="enviromento" size={24} color={"white"} />
              </TouchableOpacity>
            </Spacer>
            <Favorite place={data} />
          </Types>
        </TopBar>
        <KeyboardAwareScrollView
          alwaysBounceVertical={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
          bouncesZoom={false}
          keyboardOpeningTime={0}
        >
          <PlaceDetailContainer>
            <PlaceDetailHeader place={data} />
            <Spacer position="bottom" size="medium">
              {data.images && <ImageSlider images={data.images} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Text variant="label">Foot Traffic</Text>
            </Spacer>
            <FootTrafficChart />
            <Row>
              <Text variant="label">All Ratings and Reviews</Text>
              <Text variant="error">Top Rated</Text>
            </Row>
            {data.comments &&
              data.comments
                .slice(0.2)
                .map((item) => <ReviewCard review={item} key={item.id} />)}
            <Pressable>
              <RowCentered>
                <Text variant="error">See All Reviews</Text>
              </RowCentered>
            </Pressable>
            <CommentForm />
          </PlaceDetailContainer>
        </KeyboardAwareScrollView>
      </ModalArea>
      <SafeAreaBottom />
    </Modal>
  );
};
