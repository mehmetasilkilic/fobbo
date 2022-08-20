import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { PlacesNavigator } from "./places.navigator";
import { Home } from "../../features/home/screens/home.screen";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavouritesScreen } from "../../features/favourites/screens/favourites.screen";
import { Profile } from "../../features/profile/screens/profile.screen";

import navLogo from "../../../assets/nav-logo.png";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Map: "enviromento",
  Places: "appstore-o",
  Favourites: "hearto",
  Profile: "user",
};

const tabBarStyle = {
  position: "absolute",
  margin: 10,
  borderRadius: 5,
  height: 70,
  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowOffset: {
    width: 10,
    height: 10,
  },
};

const tabBarStyleHidden = {
  display: "none",
};

const tabBarItemStyle = {
  borderRadius: 5,
};

const tabBarActionButtonStyle = {
  width: 70,
  height: 90,
  transform: [{ translateY: -10 }],
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon:
      route.name === "Places"
        ? () => <Image source={navLogo} style={tabBarActionButtonStyle} />
        : ({ size, color }) => (
            <AntDesign name={iconName} size={28} color={color} />
          ),
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#9C1F19",
    tabBarInactiveTintColor: "#757575",
    tabBarActiveBackgroundColor: "#EEEEEE",
    // tabBarStyle: tabBarStyle,
    tabBarStyle: route.name !== "Places" ? tabBarStyle : tabBarStyleHidden,
    tabBarItemStyle: tabBarItemStyle,
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
