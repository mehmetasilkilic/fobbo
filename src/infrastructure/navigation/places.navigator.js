import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { SearchScreen } from "../../features/place/screens/search.screen";
import { PlacesScreen } from "../../features/place/screens/places.screen";
import { PlaceDetailScreen } from "../../features/place/screens/placeDetail.screen";

const PlaceStack = createStackNavigator();

export const PlacesNavigator = () => {
  return (
    <PlaceStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <PlaceStack.Screen name="Search" component={SearchScreen} />
      <PlaceStack.Screen name="PlacesList" component={PlacesScreen} />
      <PlaceStack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
    </PlaceStack.Navigator>
  );
};
