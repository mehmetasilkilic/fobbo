import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Welcome } from "../../preview/welcome/screens/welcome.screen";

const Stack = createStackNavigator();

const screenOptions = ({ route }) => {
  return {
    headerShown: false,
  };
};

export const PreviewNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
