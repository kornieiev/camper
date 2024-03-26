import { useSelector } from "react-redux";
import { selectFavoritesCampers } from "../../redux/favorites/selectors";
import { selectVisibleCampers } from "../../redux/filters/selectors";
import CampersList from "../../components/CampersList/CampersList";

import { selectIsLoading } from "../../redux/catalog/selectors";
import Loader from "../../components/Loader/Loader";
import { Container } from "./FavoritesPage.styled";
import Plug from "../../components/Plug/Plug";

const Favorites = () => {
  const likedCampers = useSelector(selectFavoritesCampers);
  const campersByFilter = useSelector(selectVisibleCampers);
  const isLoading = useSelector(selectIsLoading);

  const favoriteCampers = campersByFilter.filter((camp) =>
    likedCampers.includes(camp._id)
  );

  const title = "Add camper to favorite!";

  return (
    <Container>
      {favoriteCampers.length < 1 && (
        <>
          <Plug title={title} />
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <CampersList campers={favoriteCampers} pathForModal='favorites' />
      )}
    </Container>
  );
};

export default Favorites;
