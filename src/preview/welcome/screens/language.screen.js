import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useTranslations } from "../../../utils/useTranslations";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";

import { LanguageButton } from "../components/languageButton.component";

import {
  LanguageContainer,
  InnerContainer,
  Wrapper,
  Row,
} from "./language.styles";

const languages = [
  {
    id: 1,
    label: "English",
    value: "en",
  },
  {
    id: 2,
    label: "Türkçe",
    value: "tr",
  },
];

export const Language = ({ navigation }) => {
  const goBack = () => navigation.pop();

  const { t, status, setLang } = useTranslations();

  if (status === "loading") return <></>;

  return (
    <SafeArea>
      <Row>
        <Wrapper>
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#ED0F7E" />
          </TouchableOpacity>
        </Wrapper>
        <Text variant="titleBrandSmall">{t.auth.chngLang}</Text>
        <Wrapper />
      </Row>
      <LanguageContainer>
        <InnerContainer>
          <Spacer position="top" size="medium" />
          {languages.map((item) => (
            <LanguageButton
              data={item}
              key={item.id}
              setLanguage={() => setLang(item.value)}
            />
          ))}
        </InnerContainer>
      </LanguageContainer>
    </SafeArea>
  );
};
