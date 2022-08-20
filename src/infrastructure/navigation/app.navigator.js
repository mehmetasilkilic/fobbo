import { useState } from "react";
import { Image } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { Home } from "../../features/home/screens/home.screen";
import { PlacesNavigator } from "./places.navigator";
import { Action } from "../../features/action/screens/action.screen";
import { MapScreen } from "../../features/map/screens/map.screen";
import { ProfileNavigator } from "./profile.navigator";

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
  width: 70,
  height: 90,
  transform: [{ translateY: -10 }],
  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowOffset: {
    width: 10,
    height: 10,
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
    tabBarActiveTintColor: "#9C1F19",
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
    height: 70,
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Places"
          component={PlacesNavigator}
          options={({ route }) => {
            getPlacesHeaderTitle(route);
            placesTab === "PlaceDetail"
              ? setDisplayMode("none")
              : setDisplayMode("flex");
          }}
        />
        <Tab.Screen name="Action" component={Action} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
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
