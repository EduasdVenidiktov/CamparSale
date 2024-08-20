import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import css from "./App.module.css";
import { lazy } from "react";
import { Suspense } from "react";
import Loader from "./components/loader/Loader";

const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const CatalogPage = lazy(() =>
  import("./components/pages/CatalogPage/CatalogPage")
);
const FavoritesPage = lazy(() =>
  import("./components/pages/FavoritesPage/FavoritesPage")
);

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />{" "}
          {/* Перенаправлення на Home для невідомих маршрутів */}
        </Routes>
      </Suspense>
    </div>
  );
}
