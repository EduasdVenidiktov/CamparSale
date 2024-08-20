import { useState } from "react";
import css from "./CamperCard.module.css";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Modal from "../Modal/Modal";
import RenderStars from "../RenderStars/RenderStars";
import { useFavorites } from "../FavoritesContext/FavoritesContext"; // Імпорт контексту

const CamperCard = ({ camper }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites(); // Використання контексту

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const reviews = Array.isArray(camper.reviews) ? camper.reviews : [];
  const reviewCount = reviews.length;
  const rating = camper.rating || 0; // Убедитесь, что rating передан

  const handleHeartClick = () => {
    if (isFavorite(camper._id)) {
      removeFavorite(camper._id);
    } else {
      addFavorite(camper);
    }
  };

  const formattedPrice = camper.price.toFixed(2).replace(".", ",");

  return (
    <>
      <div className={css.camperCard}>
        <img
          src={camper.gallery[0]}
          alt={camper.name}
          className={css.imgCard}
        />

        <div className={css.textCard}>
          <div className={css.horizontContainer}>
            <div className={css.iconPrice}>
              <h2>{camper.name}</h2>
            </div>

            <div className={css.iconLocation}>
              <h2>€{formattedPrice}</h2>
              <button className={css.btnHeart} onClick={handleHeartClick}>
                {isFavorite(camper._id) ? (
                  <FaHeart className={css.iconSize} />
                ) : (
                  <FiHeart className={css.iconSize} />
                )}
              </button>
            </div>
          </div>

          <div className={css.locationContainer}>
            <div className={css.iconLocation}>
              <RenderStars rating={rating} />
              <p className={css.ratingText}>
                {rating} ({reviewCount} reviews)
              </p>
              <p>{camper.location}</p>
            </div>
          </div>

          <p className={css.description}>{camper.description}</p>

          <div className={css.buttonBox}>
            {/* логіка відображеня обранних кнопок */}
            {/* <svg>
              <use href="/src/components/images/iconButton.svg#icon-beds"></use>
            </svg> */}
          </div>

          <button
            onClick={openModal}
            type="button"
            className={css.btnShowSearch}
          >
            Show more
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          camper={camper}
          formattedPrice={formattedPrice}
        />
      )}
    </>
  );
};

export default CamperCard;
