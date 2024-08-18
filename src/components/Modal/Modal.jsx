import { useState } from "react";
import clsx from "clsx";
import RenderStars from "../RenderStars/RenderStars";
import css from "./Modal.module.css";
import styles from "../CamperCard/CamperCard.module.css";
import Features from "../Features/Features";

const Modal = ({ camper, isOpen, onClose, children }) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  if (!isOpen) return null;

  const handleClosetClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleShowFeaturesClick = () => {
    setShowFeatures(true);
    setShowReviews(false);
  };

  const handleShowReviewsClick = () => {
    setShowFeatures(false);
    setShowReviews(true);
  };

  const rating = camper.rating || 0;
  const reviews = Array.isArray(camper.reviews) ? camper.reviews : [];
  const reviewCount = reviews.length;

  return (
    <div className={css.modalOverlay} onClick={handleClosetClick}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <div className={css.nameClose}>
          <h2>{camper.name}</h2>
          <button className={css.btnCloseModal} onClick={handleClosetClick}>
            X
          </button>
        </div>
        <div className={styles.iconLocation}>
          <RenderStars rating={rating} />
          <p className={styles.ratingText}>
            {rating} ({reviewCount} reviews)
          </p>
          <p>{camper.location}</p>
        </div>
        <h2 className={css.priceStyle}>€{camper.price}.00</h2>

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
          <button
            className={clsx(css.btnModal, {
              [css.btnModalActive]: showFeatures,
            })}
            onClick={handleShowFeaturesClick}
          >
            Features
          </button>
          <button
            className={clsx(css.btnModal, {
              [css.btnModalActive]: showReviews,
            })}
            onClick={handleShowReviewsClick}
          >
            Reviews
          </button>
        </div>
        {showFeatures && (
          <Features
            details={camper.details || {}}
            equipment={camper.equipment || []}
          />
        )}
        {showReviews && (
          <div>
            {reviews.map((review, index) => (
              <div key={index}>
                <p>{review.text}</p>
                <p>Rating: {review.rating}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

// import { useState } from "react";
// import clsx from "clsx";
// import RenderStars from "../RenderStars/RenderStars";
// import css from "./Modal.module.css";
// import styles from "../CamperCard/CamperCard.module.css";
// import Features from "../Features/Features";

// const Modal = ({ camper, isOpen, onClose, children }) => {
//   const [showFeatures, setShowFeatures] = useState(false);
//   const [showReviews, setShowReviews] = useState(false);

//   if (!isOpen) return null;

//   const handleClosetClick = (e) => {
//     e.stopPropagation();
//     onClose();
//   };

//   const handleShowFeaturesClick = () => {
//     setShowFeatures(true);
//     setShowReviews(false);
//   };

//   const handleShowReviewsClick = () => {
//     setShowFeatures(false);
//     setShowReviews(true);
//   };

//   const rating = camper.rating || 0;
//   const reviews = Array.isArray(camper.reviews) ? camper.reviews : [];
//   const reviewCount = reviews.length;

//   return (
//     <div className={css.modalOverlay}>
//       <div className={css.modalContent}>
//         {children}
//         <div className={css.nameClose}>
//           <h2>{camper.name}</h2>
//           <button className={css.btnCloseModal} onClick={handleClosetClick}>
//             X
//           </button>
//         </div>
//         <div className={styles.iconLocation}>
//           <RenderStars rating={rating} />
//           <p className={styles.ratingText}>
//             {rating} ({reviewCount} reviews)
//           </p>
//           <p>{camper.location}</p>
//         </div>
//         <h2 className={css.priceStyle}>€{camper.price}.00</h2>

//         <div className={css.imageContainer}>
//           {camper.gallery.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`${camper.name} ${index + 1}`}
//               className={css.imgCard}
//             />
//           ))}
//         </div>
//         <p className={css.descriptionStyle}>{camper.description}</p>
//         <div className={css.featuresReviews}>
//           <button
//             className={clsx(css.btnModal, {
//               [css.btnModalActive]: showFeatures,
//             })}
//             onClick={handleShowFeaturesClick}
//           >
//             Features
//           </button>
//           <button
//             className={clsx(css.btnModal, {
//               [css.btnModalActive]: showReviews,
//             })}
//             onClick={handleShowReviewsClick}
//           >
//             Reviews
//           </button>
//         </div>
//         {showFeatures && (
//           <Features details={camper.details} equipment={camper.equipment} />
//         )}
//         {showReviews && (
//           <div>
//             {reviews.map((review, index) => (
//               <div key={index}>
//                 <p>{review.text}</p>
//                 <p>Rating: {review.rating}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Modal;
