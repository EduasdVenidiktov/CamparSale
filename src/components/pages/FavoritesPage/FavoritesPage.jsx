import { useRef } from "react";
import DocumentTitle from "../../DocumentTitle";
import { useFavorites } from "../../FavoritesContext/FavoritesContext"; // Імпорт хука для доступу до контексту
import CamperCard from "../../CamperCard/CamperCard"; // Імпорт компонента CamperCard
import css from "./FavoritesPage.module.css"; // Імпорт стилів

export default function FavoritesPage() {
  const { favorites } = useFavorites(); // Отримання улюблених камперів
  const camperListRef = useRef(null);

  return (
    <div className={css.listCamperCard}>
      <DocumentTitle>FavoritesPage</DocumentTitle>
      {favorites.length > 0 ? (
        <div className={css.camperCardListContainer} ref={camperListRef}>
          <div className={css.camperCardList}>
            {favorites.map((camper) => (
              <CamperCard key={camper._id} camper={camper} />
            ))}
          </div>
        </div>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}
