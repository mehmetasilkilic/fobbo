import { TouchableOpacity } from "react-native";

import { useTranslations } from "../../../utils/useTranslations";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { Row, Icon } from "./languageButton.styles";

export const LanguageButton = ({ data, setLanguage }) => {
  const { lang } = useTranslations();

  return (
    <>
      <TouchableOpacity onPress={setLanguage}>
        <Row>
          <Text variant="label">{data.label}</Text>
          {data.value === lang && (
            <Spacer position="left" size="small">
              <Icon name="check" size={16} />
            </Spacer>
          )}
        </Row>
      </TouchableOpacity>
      <Spacer position="bottom" size="medium" />
    </>
  );
};
