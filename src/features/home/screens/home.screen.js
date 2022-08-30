import { useEffect } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchPlaces } from "../../../store/places/places.slice";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Loading } from "../../../components/loading/loading.component";
import { Search } from "../../../components/search/search.component";
import { HorizontalPlaceList } from "../components/horizontalPlaceList.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CategoriesList } from "../components/categoriesList.component";
import { AdvertisementList } from "../components/advertisementList.component";
import { SmallPlaceList } from "../components/smallPlaceList.component";

import {
  HomeContainer,
  AdvertisementImageWrapper,
  AdvertisementImage,
} from "./home.styles";

export const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);
  const isLoading = useSelector((state) => state.places.loading);
  const location = useSelector((state) => state.location.location);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);

  const categoryDummyData = [
    {
      name: "Bar",
      url: "https://img.freepik.com/free-vector/vintage-octoberfest-black-logo_225004-1232.jpg?w=2000",
    },
    {
      name: "Restaurant",
      url: "https://image.shutterstock.com/image-vector/restaurant-logo-creative-600w-272549726.jpg",
    },
    {
      name: "Fast Food",
      url: "https://image.similarpng.com/very-thumbnail/2020/04/fast-food-logo-emblem.png",
    },
    {
      name: "Cafe",
      url: "https://cdn4.vectorstock.com/i/1000x1000/47/93/coffee-cafe-logo-design-inspiration-vector-32664793.jpg",
    },
    {
      name: "Vegan",
      url: "https://st3.depositphotos.com/1877361/31688/v/450/depositphotos_316884136-stock-illustration-vegan-logo-with-green-leaves.jpg",
    },
    {
      name: "Gym",
      url: "https://i.pinimg.com/originals/6a/87/b0/6a87b06ee4f2c9ff739f1a4eaa901785.jpg",
    },
    {
      name: "Night Club",
      url: "https://media.istockphoto.com/vectors/night-club-neon-light-signboard-realistic-vector-vector-id1199712852?k=20&m=1199712852&s=612x612&w=0&h=rbM4SCkvb1A_tUjAfLwTuERA3YNImYvB041hvA5Acuc=",
    },
    {
      name: "Mall",
      url: "https://thumbs.dreamstime.com/b/mall-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134155162.jpg",
    },
  ];

  const advertisementDummyData = [
    {
      name: "Bar",
      url: "https://askbootstrap.com/preview/swiggi/template2/img/pro4.jpg",
    },
    {
      name: "Restaurant",
      url: "https://askbootstrap.com/preview/swiggi/template2/img/pro1.jpg",
    },
    {
      name: "Fast Food",
      url: "https://askbootstrap.com/preview/swiggi/template2/img/pro3.jpg",
    },
    {
      name: "Cafe",
      url: "https://askbootstrap.com/preview/swiggi/template2/img/pro2.jpg",
    },
    {
      name: "Vegan",
      url: "https://askbootstrap.com/preview/swiggi/template2/img/pro3.jpg",
    },
    {
      name: "Gym",
      url: "https://askbootstrap.com/preview/swiggi/template2/img/pro4.jpg",
    },
    {
      name: "Night Club",
      url: "https://askbootstrap.com/preview/swiggi/template2/img/pro2.jpg",
    },
    {
      name: "Mall",
      url: "https://askbootstrap.com/preview/swiggi/template2/img/pro1.jpg",
    },
  ];

  const topTenPlaces = places.slice(0, 10);

  return (
    <SafeArea>
      <Search />
      <HomeContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <ScrollView>
            <CategoriesList data={categoryDummyData} />
            <HorizontalPlaceList
              data={topTenPlaces}
              onNavigate={navigation.navigate}
            />
            <AdvertisementList data={advertisementDummyData} />
            <SmallPlaceList data={places} onNavigate={navigation.navigate} />
            <AdvertisementImageWrapper>
              <AdvertisementImage
                source={{
                  uri: "https://askbootstrap.com/preview/swiggi/template2/img/banner.png",
                }}
              />
            </AdvertisementImageWrapper>
            <SmallPlaceList data={places} onNavigate={navigation.navigate} />
            <Spacer position="bottom" size="extraLarge" />
          </ScrollView>
        )}
      </HomeContainer>
    </SafeArea>
  );
};
