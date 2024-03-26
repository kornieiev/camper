import { FiltersBlock } from "../../components/FiltersBlock/FiltersBlock";
import { CatalogPageContainer } from "./CatalogPage.styled";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../../redux/catalog/selectors";
import { selectVisibleCampers } from "../../redux/filters/selectors";

import CampersList from "../../components/CampersList/CampersList";
import { Container } from "../../styles/GlobalStyles";

export default function CatalogPage() {
  const campersFiltered = useSelector(selectVisibleCampers);
  const error = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      <CatalogPageContainer>
        <FiltersBlock />
        {isLoading ? (
          <Loader />
        ) : (
          <CampersList campers={campersFiltered} pathForModal='catalog' />
        )}
      </CatalogPageContainer>
    </Container>
  );
}
