import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import WebView from "react-native-webview";

import { useTranslations } from "../../../utils/useTranslations";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { PolicyContainer, Row, Wrapper } from "./policy.styles";

const metricsUrl = "https://lucent-gelato-6a3247.netlify.app/";

export const Policy = ({ navigation }) => {
  const goBack = () => navigation.pop();

  const { t, status } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <SafeArea>
      <Row>
        <Wrapper>
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#ED0F7E" />
          </TouchableOpacity>
        </Wrapper>
        <Text variant="titleBrandSmall">{t.auth.privacyPolicy}</Text>
        <Wrapper />
      </Row>
      <PolicyContainer>
        <WebView source={{ uri: metricsUrl }} />
      </PolicyContainer>
    </SafeArea>
  );
};
