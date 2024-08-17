import { useState } from "react";
import css from "./CamperCard.module.css";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const CamperCard = ({ camper }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Переконайтесь, що camper.reviews є масивом, інакше надайте порожній масив
  const reviews = Array.isArray(camper.reviews) ? camper.reviews : [];
  const reviewCount = reviews.length;
  const rating = camper.rating || 0; // Задати значення за замовчуванням для рейтингу

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = () => {
    const filledStars = Math.round(rating); // Кількість заповнених зірок
    const emptyStars = 5 - filledStars; // Кількість порожніх зірок

    return (
      <>
        {[...Array(filledStars)].map((_, index) => (
          <AiFillStar key={`filled-${index}`} className={css.iconSize} />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <AiOutlineStar key={`empty-${index}`} className={css.iconSize} />
        ))}
      </>
    );
  };

  return (
    <div className={css.camperCard}>
      <img src={camper.gallery[0]} alt={camper.name} className={css.imgCard} />

      <div className={css.textCard}>
        <div className={css.horizontContainer}>
          <div className={css.iconPrice}>
            <h2>{camper.name}</h2>
          </div>

          <div className={css.iconLocation}>
            <h2>€{camper.price}</h2>
            <button className={css.btnHeart} onClick={handleHeartClick}>
              {isFavorite ? (
                <FaHeart className={css.iconSize} />
              ) : (
                <FiHeart className={css.iconSize} />
              )}
            </button>
          </div>
        </div>

        <div className={css.iconLocation}>
          {renderStars()}
          <p className={css.ratingText}>
            {rating} ({reviewCount} reviews)
          </p>
          <p>{camper.location}</p>
        </div>

        <p className={css.description}>{camper.description}</p>

        <div className={css.buttonBox}>
          <button className={css.buttonText}>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-heart"></use>
            </svg>
            {camper.adults}
          </button>
          <button className={css.buttonText}>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-Container"></use>
            </svg>
            {camper.children}
          </button>
          <button className={css.buttonText}>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-Vector"></use>
            </svg>
            {camper.engine}
          </button>
          <button className={css.buttonText}>
            <svg className={css.iconStyle}>
              <use href="/src/components/images/icons.svg#icon-Container"></use>
            </svg>
            {camper.transmission}
          </button>
        </div>

        <button type="submit" className={css.btnShowSearch}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
