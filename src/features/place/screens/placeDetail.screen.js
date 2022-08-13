import { PlaceInfoCard } from "../components/placeInfoCard.components";

import { SafeArea } from "../../../components/utils/safeArea.component";

export const PlaceDetailScreen = ({ route }) => {
  const { place } = route.params;
  return (
    <SafeArea>
      <PlaceInfoCard place={place} />
    </SafeArea>
  );
};
