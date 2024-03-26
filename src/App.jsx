import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCampers } from "./redux/catalog/operations";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import AppLayout from "./components/AppLayout/AppLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const Features = lazy(() => import("./components/Features/Features"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route path='catalog' element={<CatalogPage />} />
        <Route path='catalog/:camperId' element={<CatalogPage />}>
          <Route path='features' element={<Features />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>

        <Route path='favorites' element={<FavoritesPage />}>
          <Route path='favorites/:camperId' element={<FavoritesPage />} />
          <Route path='features' element={<Features />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
