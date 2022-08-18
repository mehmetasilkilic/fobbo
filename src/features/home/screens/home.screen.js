import { useContext } from "react";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Loading } from "../../../components/loading/loading.component";
import { Search } from "../../../components/search/search.component";
import { HorizontalPlaceList } from "../components/horizontalPlaceList.component";

import { PlacesContext } from "../../../services/places/places.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

export const Home = ({ navigation }) => {
  const { places, isLoading } = useContext(PlacesContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isLoading && <Loading />}
      <Search />
      <HorizontalPlaceList data={places} onNavigate={navigation.navigate} />
    </SafeArea>
  );
};
