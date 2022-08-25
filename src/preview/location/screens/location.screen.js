import { TouchableOpacity, Dimensions } from "react-native";
import { SvgXml } from "react-native-svg";

import { AntDesign } from "@expo/vector-icons";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import location from "../../../../assets/location";

import { LocationContainer, Button } from "./location.styles";

const width = Dimensions.get("window").width * 0.7;

export const Location = ({ navigation }) => (
  <SafeArea>
    <LocationContainer>
      <Spacer position="bottom" size="medium">
        <SvgXml xml={location} width={width} height={width} />
      </Spacer>
      <Spacer position="bottom" size="medium">
        <Text>Hi, nice to meet you!</Text>
      </Spacer>
      <Text variant="caption">
        Choose your location to start find places around you.
      </Text>
      <Button>
        <Spacer position="right" size="medium">
          <AntDesign name="enviromento" size={20} color="#ffffff" />
        </Spacer>
        <Text variant="subTitle">USE CURRENT LOCATION</Text>
      </Button>
      <Spacer position="top" size="medium">
        <TouchableOpacity>
          <Text variant="error">Select it manually</Text>
        </TouchableOpacity>
      </Spacer>
    </LocationContainer>
  </SafeArea>
);
