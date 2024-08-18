import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (camper) => {
    setFavorites([...favorites, camper]);
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
