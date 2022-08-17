import { useContext } from "react";

import { SafeArea } from "../../../components/utils/safeArea.component";
import { Loading } from "../../../components/loading/loading.component";
import { Search } from "../../../components/search/search.component";
import { HorizontalBar } from "../../../components/horizontalBar/horizontalBar.component";

import { PlacesContext } from "../../../services/places/places.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

export const Home = () => {
  const { places, isLoading } = useContext(PlacesContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      {isLoading && <Loading />}
      <Search />
      <HorizontalBar data={places} />
    </SafeArea>
  );
};
