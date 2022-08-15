import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { PlacesScreen } from "../../features/place/screens/places.screen";
import { PlaceDetailScreen } from "../../features/place/screens/placeDetail.screen";

const PlaceStack = createStackNavigator();

export const PlacesNavigator = () => {
  return (
    <PlaceStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <PlaceStack.Screen name="Places" component={PlacesScreen} />
      <PlaceStack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
    </PlaceStack.Navigator>
  );
};
