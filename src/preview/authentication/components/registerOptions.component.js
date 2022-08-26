import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { Row, ButtonSmall } from "./registerOptions.styles";

export const RegisterOptions = ({ onTouch }) => (
  <View>
    <Row>
      <Spacer position="right" size="medium">
        <ButtonSmall>
          <Spacer position="right" size="medium">
            <AntDesign name="facebook-square" size={20} color={"#262626"} />
          </Spacer>
          <Text>Facebook</Text>
        </ButtonSmall>
      </Spacer>
      <ButtonSmall onPress={onTouch}>
        <Spacer position="right" size="medium">
          <AntDesign name="google" size={20} color={"#262626"} />
        </Spacer>
        <Text>Google</Text>
      </ButtonSmall>
    </Row>
  </View>
);
