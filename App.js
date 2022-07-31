import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { PlacesScreen } from "./src/features/place/screens/places.screen";

export default function App() {
  return (
    <>
      <PlacesScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
