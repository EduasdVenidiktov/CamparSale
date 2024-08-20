// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage";
import FavoritesPage from "./components/pages/FavoritesPage/FavoritesPage";
import CatalogPage from "./components/pages/CatalogPage/CatalogPage";
import Navigation from "./components/Navigation/Navigation";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />{" "}
        {/* Перенаправлення на Home для невідомих маршрутів */}
      </Routes>
    </div>
  );
}
