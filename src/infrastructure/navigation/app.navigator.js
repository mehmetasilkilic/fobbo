import { Image, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { Action } from "../../features/action/screens/action.screen";

import {
  FadeHomeScreen,
  FadePlacesScreen,
  FadeMapScreen,
  FadeProfileScreen,
} from "./utils/animatedScreens";

import navLogo from "../../../assets/nav-logo.png";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Places: "search1",
  Map: "enviromento",
  Profile: "user",
};

const tabBarStyleHidden = {
  display: "none",
};

const tabBarItemStyle = {
  height: 60,
  borderRadius: 10,
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
const tabBarMarginBottom = StatusBar.currentHeight ? 10 : 45;

const tabBarStyle = {
  position: "absolute",
  margin: 10,
  marginBottom: tabBarMarginBottom,
  borderRadius: 10,
  height: 60,
  shadowColor: "#262626",
  shadowOpacity: 0.06,
  shadowOffset: {
    width: 10,
    height: 10,
  },
  elevation: 8,
};

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

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={FadeHomeScreen} />
      <Tab.Screen name="Places" component={FadePlacesScreen} />
      <Tab.Screen name="Action" component={Action} />
      <Tab.Screen name="Map" component={FadeMapScreen} />
      <Tab.Screen name="Profile" component={FadeProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
