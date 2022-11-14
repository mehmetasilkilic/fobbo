import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { useTranslations } from "../../../utils/useTranslations";

import { AgreementsContainer, Row, AgreementText } from "./agreements.styles";

export const Agreements = ({ goPolicy }) => {
  const { t, status } = useTranslations();

  if (status === "loading") return <></>;
  return (
    <AgreementsContainer>
      <Spacer position="bottom" size="medium">
        <Text variant="caption">{t.auth.agreementTitle}</Text>
      </Spacer>
      <Row>
        {/*         <TouchableOpacity>
          <AgreementText variant="brandSmall">
            {t.auth.termsOfService}
          </AgreementText>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={goPolicy}>
          <AgreementText variant="brandSmall">
            {t.auth.privacyPolicy}
          </AgreementText>
        </TouchableOpacity>
        {/*         <TouchableOpacity>
          <AgreementText variant="brandSmall">
            {t.auth.contentPolicy}
          </AgreementText>
        </TouchableOpacity> */}
      </Row>
    </AgreementsContainer>
  );
};
