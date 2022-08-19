import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { PlacesNavigator } from "./places.navigator";
import { Home } from "../../features/home/screens/home.screen";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouritesScreen } from "../../features/favourites/screens/favourites.screen";
import { Profile } from "../../features/profile/screens/profile.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Map: "enviromento",
  Places: "appstore-o",
  Favourites: "hearto",
  Profile: "user",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <AntDesign name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "#9C1F19",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Places" component={PlacesNavigator} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  </NavigationContainer>
);
