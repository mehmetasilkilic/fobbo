import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { ProfileScreen } from "../../features/profile/screens/profile.screen";
import { FavoritesScreen } from "../../features/profile/screens/favorites.screen";
import { ChangePassword } from "../../features/profile/screens/changePassword.screen";
import { Language } from "../../features/profile/screens/language.screen";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="Favorites" component={FavoritesScreen} />
      <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
      <ProfileStack.Screen name="Language" component={Language} />
    </ProfileStack.Navigator>
  );
};
