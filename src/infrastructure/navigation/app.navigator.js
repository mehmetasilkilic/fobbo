import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utils/safeArea.component";

import { PlacesNavigator } from "./places.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { Home } from "../../features/home/screens/home.screen";
import { FavouritesScreen } from "../../features/favourites/screens/favourites.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "md-home",
  Map: "md-map",
  Places: "md-restaurant",
  Favourites: "md-heart",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
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
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
