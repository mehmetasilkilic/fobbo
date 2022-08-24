import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { ImageSlider } from "../../../components/imageSlider/imageSlider.component";
import { Text } from "../../../components/typography/text.component";

import { Buttons } from "../components/buttons.component";

import { SliderContainer, TopBar, ActionContainer } from "./action.styles";

const data = [
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

export const Action = () => (
  <SafeArea>
    <TopBar>
      <TouchableOpacity>
        <AntDesign name="enviromento" size={24} color={"white"} />
      </TouchableOpacity>
      <Text variant="whiteButton">Ataköy 9. Kısım, Uğur Mumcu Bulvarı</Text>
    </TopBar>
    <ActionContainer>
      <SliderContainer>
        <ImageSlider images={data} />
      </SliderContainer>
      <Buttons />
    </ActionContainer>
  </SafeArea>
);
