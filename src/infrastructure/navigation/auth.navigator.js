import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Welcome } from "../../preview/welcome/screens/welcome.screen";
import { Register } from "../../preview/authentication/screens/register.screen";
import { Login } from "../../preview/authentication/screens/login.screen";
import { ForgetPassword } from "../../preview/authentication/screens/forgetPassword.screen";
import { Onboarding } from "../../preview/onboarding/screens/onboarding.screen";
import { Location } from "../../preview/location/screens/location.screen";

const Stack = createStackNavigator();

const screenOptions = () => {
  return {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  };
};

export const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Location" component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};