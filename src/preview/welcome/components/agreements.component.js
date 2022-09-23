import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { AgreementsContainer, Row, AgreementText } from "./agreements.styles";

export const Agreements = () => (
  <AgreementsContainer>
    <Spacer position="bottom" size="small">
      <Text variant="caption">By, countinuing, you agree to our</Text>
    </Spacer>
    <Row>
      <TouchableOpacity>
        <AgreementText variant="brandSmall">Terms of Service</AgreementText>
      </TouchableOpacity>
      <TouchableOpacity>
        <AgreementText variant="brandSmall">Privacy Policy</AgreementText>
      </TouchableOpacity>
      <TouchableOpacity>
        <AgreementText variant="brandSmall">Content Policies</AgreementText>
      </TouchableOpacity>
    </Row>
  </AgreementsContainer>
);
