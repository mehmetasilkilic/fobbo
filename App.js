import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as usePoiretOne,
  PoiretOne_400Regular,
} from "@expo-google-fonts/poiret-one";

import { store } from "./src/store/store";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [latoLoaded] = useLato({ Lato_400Regular });
  const [poiretOneLoaded] = usePoiretOne({ PoiretOne_400Regular });

  if (!latoLoaded || !poiretOneLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
