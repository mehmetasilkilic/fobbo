import { View, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { FootTrafficChart } from "../components/footTrafficChart.component";
import { PlaceDetailHeader } from "../components/placeDetailHeader.component";
import { ReviewCard } from "../components/reviewCard.component";
import { CommentForm } from "../components/commentForm.component";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import { ImageSlider } from "../../../components/imageSlider/imageSlider.component";

import {
  PlaceDetailContainer,
  Types,
  Row,
  TopBar,
  SafeAreaDetail,
  RowCentered,
} from "./placeDetail.styles";

const reviews = [
  {
    id: 1,
    username: "John Doe",
    rating: 4,
    date: "20 Mar 2022",
    reviewText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    profilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    likes: 202,
    dislikes: 2,
  },
  {
    id: 2,
    username: "Alihan Türkeri",
    rating: 1,
    date: "31 Mar 2022",
    reviewText: "Nedim Çelik beni dolandırdı.",
    profilePicture:
      "https://cdn.memorial.com.tr/files/2018/8/ab3d54ce-b6f5-428f-94af-d757be212720.png",
    likes: 999,
    dislikes: 0,
  },
];

export const PlaceDetailScreen = ({ route, navigation }) => {
  const { place } = route.params;

  return (
    <SafeAreaDetail>
      <TopBar>
        <View>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <AntDesign name="down" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
        <Types>
          <Spacer position="right" size="large">
            <TouchableOpacity>
              <AntDesign name="enviromento" size={24} color={"white"} />
            </TouchableOpacity>
          </Spacer>
          <Favourite place={place} />
        </Types>
      </TopBar>
      <ScrollView>
        <PlaceDetailContainer>
          <PlaceDetailHeader place={place} />
          <Spacer position="bottom" size="medium">
            <ImageSlider images={place.photos} />
          </Spacer>
          <Spacer position="left" size="medium">
            <Text variant="label">Foot Traffic</Text>
          </Spacer>
          <FootTrafficChart />
          <Row>
            <Text variant="label">All Ratings and Reviews</Text>
            <Text variant="error">Top Rated</Text>
          </Row>
          {reviews.map((item) => (
            <ReviewCard review={item} key={item.id} />
          ))}
          <Pressable>
            <RowCentered>
              <Text variant="error">See All Reviews</Text>
            </RowCentered>
          </Pressable>
          <CommentForm />
        </PlaceDetailContainer>
      </ScrollView>
    </SafeAreaDetail>
  );
};
