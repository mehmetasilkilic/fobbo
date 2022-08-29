import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { Preview } from "./src/infrastructure/preview";

export default function Layout() {
  const user = useSelector((state) => state.user.currentUser);

  console.log(user);

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      {!user ? <Preview /> : <Navigation />}
    </ThemeProvider>
  );
}
