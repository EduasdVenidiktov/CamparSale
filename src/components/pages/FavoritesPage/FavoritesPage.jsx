import { useEffect, useRef, useState } from "react";
import DocumentTitle from "../../DocumentTitle";
import { useFavorites } from "../../FavoritesContext/FavoritesContext"; // Імпорт хука для доступу до контексту
import CamperCard from "../../CamperCard/CamperCard"; // Імпорт компонента CamperCard
import css from "./FavoritesPage.module.css"; // Імпорт стилів
import styles from "../CatalogPage/CatalogPage.module.css";

export default function FavoritesPage() {
  const { favorites } = useFavorites(); // Отримання улюблених камперів
  const camperListRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={styles.container}>
      <DocumentTitle>FavoritesPage</DocumentTitle>
      {favorites.length > 0 ? (
        <div className={css.camperCardListContainer} ref={camperListRef}>
          <div className={css.camperCardList}>
            {favorites.map((camper) => (
              <CamperCard key={camper._id} camper={camper} />
            ))}
            {showScrollButton && (
              <button className={css.scrollToTopButton} onClick={scrollToTop}>
                ↑
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}
