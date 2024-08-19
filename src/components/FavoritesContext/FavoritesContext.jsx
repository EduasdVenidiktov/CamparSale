import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Завантаження улюблених з localStorage при ініціалізації
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    // Зберігання улюблених в localStorage при зміні
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (camper) => {
    if (!favorites.some((fav) => fav._id === camper._id)) {
      setFavorites([...favorites, camper]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((camper) => camper._id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((camper) => camper._id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ addFavorite, removeFavorite, isFavorite, favorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
