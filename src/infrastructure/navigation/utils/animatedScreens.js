import { FadeInView } from "../../../utils/fadeInView";

import { Home } from "../../../features/home/screens/home.screen";
import { PlacesNavigator } from "../places.navigator";
import { MapScreen } from "../../../features/map/screens/map.screen";
import { ProfileNavigator } from "../profile.navigator";

export const FadeHomeScreen = (props, { navigation }) => (
  <FadeInView>
    <Home {...props} />
  </FadeInView>
);

export const FadePlacesScreen = (props, { navigation }) => (
  <FadeInView>
    <PlacesNavigator {...props} />
  </FadeInView>
);

export const FadeMapScreen = (props, { navigation }) => (
  <FadeInView>
    <MapScreen {...props} />
  </FadeInView>
);

export const FadeProfileScreen = (props, { navigation }) => (
  <FadeInView>
    <ProfileNavigator {...props} />
  </FadeInView>
);
