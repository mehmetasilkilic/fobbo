import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RegisterOptions } from "../components/registerOptions.component";

import { RegisterContainer } from "./register.styles";

export const Register = ({ navigation }) => {
  const nav = () => navigation.navigate("Onboarding");

  return (
    <SafeArea>
      <RegisterContainer>
        <RegisterOptions onTouch={nav} />
      </RegisterContainer>
    </SafeArea>
  );
};
