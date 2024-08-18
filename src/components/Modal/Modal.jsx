import RenderStars from "../RenderStars/RenderStars";
import css from "./Modal.module.css"; // Добавьте стили для модального окна

const Modal = ({ camper, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClosetClick = (e) => {
    e.stopPropagation(); // Чтобы клик на кнопку не закрывал модалку
    onClose(); // Закрываем модалку
  };

  const rating = camper.rating || 0;
  const reviews = Array.isArray(camper.reviews) ? camper.reviews : [];
  const reviewCount = reviews.length;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        {children}
        <div className={css.nameClose}>
          <h2>{camper.name}</h2>
          <button className={css.btnCloseModal} onClick={handleClosetClick}>
            X
          </button>
        </div>
        <div className={css.iconLocation}>
          <RenderStars rating={rating} />
          <p className={css.ratingText}>
            {rating} ({reviewCount} reviews)
          </p>
          <p>{camper.location}</p>
        </div>
        <h2 className={css.priceStyle}>Price: €{camper.price}.00</h2>

        <div className={css.imageContainer}>
          {camper.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${camper.name} ${index + 1}`}
              className={css.imgCard}
            />
          ))}
        </div>
        <p className={css.descriptionStyle}>{camper.description}</p>
        <div className={css.featuresReviews}>
          <h2>
            <button className={css.btnModal}>Features</button>
          </h2>
          <h2>
            <button className={css.btnModal}>Reviews</button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
