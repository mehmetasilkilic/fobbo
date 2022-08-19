import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  AccountInfo,
  Row,
  ProfilePicture,
  Column,
  Info,
  InlineRow,
  RowNoBorder,
} from "./profile.styles";

export const Profile = () => (
  <SafeArea>
    <ScrollView>
      <Spacer position="top" size="medium">
        <AccountInfo>
          <Spacer position="right" size="medium">
            <ProfilePicture
              source={{
                uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
            />
          </Spacer>
          <Column>
            <Spacer position="bottom" size="small">
              <Text variant="label">John Doe</Text>
            </Spacer>
            <Text variant="caption">johndoe@gmail.com</Text>
          </Column>
        </AccountInfo>
      </Spacer>
      <Spacer position="top" size="medium">
        <Info>
          <RowNoBorder>
            <InlineRow>
              <Spacer position="right" size="medium">
                <AntDesign name="setting" size={26} color="gray" />
              </Spacer>
              <Text variant="label">Settings</Text>
            </InlineRow>
            <AntDesign name="right" size={16} color="black" />
          </RowNoBorder>
          <Row>
            <InlineRow>
              <Spacer position="right" size="medium">
                <AntDesign name="phone" size={26} color="red" />
              </Spacer>
              <Text variant="label">Contact</Text>
            </InlineRow>
            <AntDesign name="right" size={16} color="black" />
          </Row>
          <Row>
            <InlineRow>
              <Spacer position="right" size="medium">
                <AntDesign name="infocirlceo" size={26} color="green" />
              </Spacer>
              <Text variant="label">Term of use</Text>
            </InlineRow>
            <AntDesign name="right" size={16} color="black" />
          </Row>
          <Row>
            <InlineRow>
              <Spacer position="right" size="medium">
                <AntDesign name="filetext1" size={26} color="#f0bb00" />
              </Spacer>
              <Text variant="label">Privacy policy</Text>
            </InlineRow>
            <AntDesign name="right" size={16} color="black" />
          </Row>
          <Row>
            <InlineRow>
              <Spacer position="right" size="medium">
                <AntDesign name="lock1" size={26} color="black" />
              </Spacer>
              <Text variant="label">Login settings</Text>
            </InlineRow>
            <AntDesign name="right" size={16} color="black" />
          </Row>
          <Row>
            <InlineRow>
              <Spacer position="right" size="medium">
                <AntDesign name="logout" size={26} color="red" />
              </Spacer>
              <Text variant="label">Logout</Text>
            </InlineRow>
            <AntDesign name="right" size={16} color="black" />
          </Row>
        </Info>
      </Spacer>
      <RowNoBorder>
        <Text variant="label">Language - Dil</Text>
      </RowNoBorder>
      <Info>
        <RowNoBorder>
          <Text variant="label">English</Text>
          <AntDesign name="right" size={16} color="black" />
        </RowNoBorder>
      </Info>
      <RowNoBorder>
        <Text variant="label">Version</Text>
      </RowNoBorder>
      <Info>
        <RowNoBorder>
          <Text variant="label">1.13.10</Text>
        </RowNoBorder>
      </Info>
    </ScrollView>
  </SafeArea>
);
