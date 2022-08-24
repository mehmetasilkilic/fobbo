import { AntDesign } from "@expo/vector-icons";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { Row, InlineRow } from "./profileRow.styles";

export const ProfileRow = ({ label, color, icon }) => (
  <Row>
    <InlineRow>
      <Spacer position="right" size="medium">
        <AntDesign name={icon} size={26} color={color} />
      </Spacer>
      <Text variant="label">{label}</Text>
    </InlineRow>
    <AntDesign name="right" size={16} color="#262626" />
  </Row>
);
