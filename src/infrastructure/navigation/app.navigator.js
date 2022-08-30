import { useState } from "react";
import { Image } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { Action } from "../../features/action/screens/action.screen";

import {
  FadeHomeScreen,
  FadePlacesScreen,
  FadeMapScreen,
  FadeProfileScreen,
} from "./animatedScreens";

import navLogo from "../../../assets/nav-logo.png";

let placesTab = "";
let profileTab = "";

const getPlacesHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Places";
  placesTab = routeName;
};

const getProfileHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Profile";
  profileTab = routeName;
};

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Places: "appstore-o",
  Map: "enviromento",
  Profile: "user",
};

const tabBarStyleHidden = {
  display: "none",
};

const tabBarItemStyle = {
  borderRadius: 5,
};

const tabBarActionButtonStyle = {
  width: 60,
  height: 80,
  transform: [{ translateY: -10 }],
  shadowColor: "#262626",
  shadowOpacity: 0.06,
  shadowOffset: {
    width: 0,
    height: 0,
  },
};

let tabBarStyle = {};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon:
      route.name !== "Action"
        ? ({ color }) => <AntDesign name={iconName} size={28} color={color} />
        : () => <Image source={navLogo} style={tabBarActionButtonStyle} />,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: "#f00062",
    tabBarInactiveTintColor: "#757575",
    tabBarActiveBackgroundColor: "#EEEEEE",
    tabBarStyle: route.name !== "Action" ? tabBarStyle : tabBarStyleHidden,
    tabBarItemStyle: tabBarItemStyle,
  };
};

export const AppNavigator = () => {
  const [displayMode, setDisplayMode] = useState("flex");

  tabBarStyle = {
    display: displayMode,
    position: "absolute",
    margin: 10,
    borderRadius: 5,
    height: 60,
    shadowColor: "#262626",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
    backgroundColor: "#ffffff",
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={FadeHomeScreen} />
        <Tab.Screen
          name="Places"
          component={FadePlacesScreen}
          options={({ route }) => {
            getPlacesHeaderTitle(route);
            placesTab === "PlaceDetail"
              ? setDisplayMode("none")
              : setDisplayMode("flex");
          }}
        />
        <Tab.Screen name="Action" component={Action} />
        <Tab.Screen name="Map" component={FadeMapScreen} />
        <Tab.Screen
          name="Profile"
          component={FadeProfileScreen}
          options={({ route }) => {
            getProfileHeaderTitle(route);
            profileTab === "Favourites"
              ? setDisplayMode("none")
              : placesTab === "PlaceDetail"
              ? setDisplayMode("none")
              : setDisplayMode("flex");
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
