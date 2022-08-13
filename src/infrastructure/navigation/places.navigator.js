import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { PlacesScreen } from "../../features/place/screens/places.screen";

const PlaceStack = createStackNavigator();

export const PlacesNavigator = () => {
  return (
    <PlaceStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <PlaceStack.Screen name="Places" component={PlacesScreen} />
      <PlaceStack.Screen
        name="PlaceDetail"
        component={() => <Text>Restaurant Detail</Text>}
      />
    </PlaceStack.Navigator>
  );
};
