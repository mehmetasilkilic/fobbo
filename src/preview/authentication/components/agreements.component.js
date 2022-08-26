import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AgreementsContainer, Row, AgreementText } from "./agreements.styles";

export const Agreements = () => (
  <AgreementsContainer>
    <Spacer position="bottom" size="small">
      <Text variant="whiteButton">By, countinuing, you agree to our</Text>
    </Spacer>
    <Row>
      <TouchableOpacity>
        <AgreementText variant="caption">Terms of Service</AgreementText>
      </TouchableOpacity>
      <TouchableOpacity>
        <AgreementText variant="caption">Privacy Policy</AgreementText>
      </TouchableOpacity>
      <TouchableOpacity>
        <AgreementText variant="caption">Content Policies</AgreementText>
      </TouchableOpacity>
    </Row>
  </AgreementsContainer>
);
