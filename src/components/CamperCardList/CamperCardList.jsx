import { useState } from "react";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperCardList.module.css";

const CamperCardList = ({ campers }) => {
  const [displayedCards, setDisplayedCards] = useState(4); // Відображаємо початково 4 картки

  const loadMore = () => {
    setDisplayedCards(displayedCards + 4); // Завантажуємо ще 4 картки
  };

  return (
    <div className={css.rightContainer}>
      <div className={css.camperCardList}>
        {campers.slice(0, displayedCards).map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>

      {displayedCards < campers.length && (
        <button onClick={loadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CamperCardList;
