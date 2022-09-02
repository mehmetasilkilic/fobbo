import { ScrollView, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../../store/user/user.slice";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { ProfileRow } from "../components/profileRow.component";

import {
  AccountInfo,
  ProfilePicture,
  Column,
  Info,
  InlineRow,
  RowNoBorder,
  ProfileContainer,
} from "./profile.styles";

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.currentUser);

  const RowList = [
    {
      id: 1,
      label: "Contact",
      color: "red",
      icon: "phone",
      onTouch: () => navigation.navigate("Favourites"),
    },
    {
      id: 2,
      label: "Term of use",
      color: "green",
      icon: "infocirlceo",
      onTouch: "",
    },
    {
      id: 3,
      label: "Privacy policy",
      color: "#f0bb00",
      icon: "filetext1",
      onTouch: "",
    },
    {
      id: 4,
      label: "Login settings",
      color: "black",
      icon: "lock1",
      onTouch: "",
    },
    {
      id: 5,
      label: "Logout",
      color: "red",
      icon: "logout",
      onTouch: () => dispatch(logout()),
    },
  ];

  return (
    <SafeArea>
      <ProfileContainer>
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
                  <Text variant="label">{userInfo.name}</Text>
                </Spacer>
                <Text variant="caption">{userInfo.email}</Text>
              </Column>
            </AccountInfo>
          </Spacer>
          <Spacer position="top" size="medium">
            <Info>
              <Pressable onPress={() => navigation.navigate("Favourites")}>
                <RowNoBorder>
                  <InlineRow>
                    <Spacer position="right" size="medium">
                      <AntDesign name="heart" size={26} color="red" />
                    </Spacer>
                    <Text variant="label">Favourites</Text>
                  </InlineRow>
                  <AntDesign name="right" size={16} color="#262626" />
                </RowNoBorder>
              </Pressable>
              {RowList.map((item) => (
                <Pressable key={item.id} onPress={item.onTouch}>
                  <ProfileRow
                    label={item.label}
                    color={item.color}
                    icon={item.icon}
                  />
                </Pressable>
              ))}
            </Info>
          </Spacer>
          <RowNoBorder>
            <Text variant="label">Language - Dil</Text>
          </RowNoBorder>
          <Info>
            <RowNoBorder>
              <Text variant="label">English</Text>
              <AntDesign name="right" size={16} color="#262626" />
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
          <Spacer position="bottom" size="extraLarge" />
        </ScrollView>
      </ProfileContainer>
    </SafeArea>
  );
};
