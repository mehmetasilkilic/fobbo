import { useState, useEffect } from "react";
import { ScrollView, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-native-modal";
import * as MailComposer from "expo-mail-composer";

import { useTranslations } from "../../../utils/useTranslations";

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
  ModalContainer,
  Row,
  ModalButton,
  CancelButton,
} from "./profile.styles";

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user.currentUser);
  const [signOutModal, setSignOutModal] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }

    checkAvailability();
  }, []);

  const sendEmail = () => {
    MailComposer.composeAsync({
      subject: "Hi fobbo",
      body: "Hi",
      recipients: ["info@fobbo.app"],
    });
  };

  const goLanguage = () => navigation.navigate("Language");

  const { t, status, lang } = useTranslations();

  if (status === "loading") return <></>;

  const RowList = [
    {
      id: 1,
      label: t.profile.contact,
      color: "red",
      icon: "phone",
      onTouch: () => sendEmail(),
    },
    /*     {
      id: 2,
      label: t.profile.termsOfService,
      color: "green",
      icon: "infocirlceo",
      onTouch: "",
    }, */
    {
      id: 3,
      label: t.profile.privacyPolicy,
      color: "#f0bb00",
      icon: "filetext1",
      onTouch: () => navigation.navigate("Policy"),
    },
    /*     {
      id: 4,
      label: t.profile.contentPolicy,
      color: "#f0bb00",
      icon: "filetext1",
      onTouch: "",
    }, */
    {
      id: 5,
      label: t.profile.changePass,
      color: "black",
      icon: "lock1",
      onTouch: () => navigation.navigate("ChangePassword"),
    },
    {
      id: 6,
      label: t.profile.signOut,
      color: "red",
      icon: "logout",
      onTouch: () => setSignOutModal(true),
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
              <Pressable onPress={() => navigation.navigate("Favorites")}>
                <RowNoBorder>
                  <InlineRow>
                    <Spacer position="right" size="medium">
                      <AntDesign name="heart" size={26} color="red" />
                    </Spacer>
                    <Text variant="label">{t.profile.favorites}</Text>
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
            <Pressable onPress={goLanguage}>
              <RowNoBorder>
                <Text variant="label">
                  {lang === "tr" ? "Türkçe" : "English"}
                </Text>
                <AntDesign name="right" size={16} color="#262626" />
              </RowNoBorder>
            </Pressable>
          </Info>
          <RowNoBorder>
            <Text variant="label">{t.profile.version}</Text>
          </RowNoBorder>
          <Info>
            <RowNoBorder>
              <Text variant="label">1.13.10</Text>
            </RowNoBorder>
          </Info>
          <Spacer position="bottom" size="large" />
        </ScrollView>
      </ProfileContainer>
      <Modal
        isVisible={signOutModal}
        onBackdropPress={() => setSignOutModal(false)}
      >
        <ModalContainer>
          <Text variant="label">{t.signOutMsg}</Text>
          <Spacer position="bottom" size="large" />
          <Row>
            <CancelButton onPress={() => setSignOutModal(false)}>
              <Text variant="whiteButton">{t.cancel}</Text>
            </CancelButton>
            <ModalButton
              onPress={() => {
                setSignOutModal(false);
                dispatch(logout());
              }}
            >
              <Text variant="whiteButton">{t.signOut}</Text>
            </ModalButton>
          </Row>
        </ModalContainer>
      </Modal>
    </SafeArea>
  );
};
