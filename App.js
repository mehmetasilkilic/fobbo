import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { Preview } from "./src/infrastructure/preview";

import { store } from "./src/store/store";

export default function App() {
  const user = "null";

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {!user ? <Preview /> : <Navigation />}
        </ThemeProvider>
      </Provider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
