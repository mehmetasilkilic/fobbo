import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";

import { AppNavigator } from "./app.navigator";
import { AuthNavigator } from "./auth.navigator";

export const Navigation = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      {!user ? <AuthNavigator /> : <AppNavigator />}
      <ExpoStatusBar style={user ? "auto" : "light"} />
    </>
  );
};
