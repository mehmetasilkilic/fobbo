import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { Home } from "../../features/home/screens/home.screen";
import { PlacesNavigator } from "./places.navigator";
import { Action } from "../../features/action/screens/action.screen";
import { MapScreen } from "../../features/map/screens/map.screen";
import { ProfileNavigator } from "./profile.navigator";

import navLogo from "../../../assets/nav-logo.png";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Places: "appstore-o",
  Map: "enviromento",
  Profile: "user",
};

const tabBarStyle = {
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

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Places" component={PlacesNavigator} />
      <Tab.Screen name="Action" component={Action} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);
