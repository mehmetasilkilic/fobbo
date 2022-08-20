import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { ProfileScreen } from "../../features/profile/screens/profile.screen";
import { FavouritesScreen } from "../../features/profile/screens/favourites.screen";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerShown: true,
        }}
      />
    </ProfileStack.Navigator>
  );
};
