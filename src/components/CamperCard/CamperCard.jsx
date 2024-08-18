import { useState } from "react";
import css from "./CamperCard.module.css";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const CamperCard = ({ camper }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("features");

  const reviews = Array.isArray(camper.reviews) ? camper.reviews : [];
  const reviewCount = reviews.length;
  const rating = camper.rating || 0;

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = () => {
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            {/* Parameter buttons */}
            {/* ... */}
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
        <div className={css.modalBackdrop} onClick={closeModal}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={css.closeButton} onClick={closeModal}>
              ×
            </button>

            <div className={css.modalTabs}>
              <button
                onClick={() => setActiveTab("features")}
                className={activeTab === "features" ? css.activeTab : ""}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={activeTab === "reviews" ? css.activeTab : ""}
              >
                Reviews
              </button>
            </div>

            {activeTab === "features" ? (
              <div className={css.featuresContent}>
                {/* Features Content */}
                <div className={css.leftSide}>
                  {/* Parameters selection block */}
                  <div className={css.parametersBlock}>
                    <h3>Parameters</h3>
                    {/* List of parameters (e.g., air conditioning, seats, etc.) */}
                  </div>
                  {/* Vehicle details block */}
                  <div className={css.vehicleDetailsBlock}>
                    <h3>Vehicle details</h3>
                    {/* Vehicle details (e.g., length, width, height, etc.) */}
                  </div>
                </div>
                <div className={css.rightSide}>
                  <h3>Book your campervan now</h3>
                  <form>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Booking Date</label>
                    <input type="date" name="bookingDate" />
                    <label>Comment</label>
                    <textarea name="comment"></textarea>
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            ) : (
              <div className={css.reviewsContent}>
                {/* Reviews Content */}
                <div className={css.leftSide}>
                  <h3>Reviews</h3>
                  {reviews.map((review, index) => (
                    <div key={index} className={css.reviewItem}>
                      <p>
                        <strong>Rating:</strong> {review.rating}
                      </p>
                      <p>{review.content}</p>
                    </div>
                  ))}
                </div>
                <div className={css.rightSide}>
                  <h3>Book your campervan now</h3>
                  {/* Booking form (same as in features) */}
                  <form>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Booking Date</label>
                    <input type="date" name="bookingDate" />
                    <label>Comment</label>
                    <textarea name="comment"></textarea>
                    <button type="submit">Send</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CamperCard;

// import { useState } from "react";
// import css from "./CamperCard.module.css";
// import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";
// import { AiOutlineStar, AiFillStar } from "react-icons/ai";

// const CamperCard = ({ camper }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   // Переконайтесь, що camper.reviews є масивом, інакше надайте порожній масив
//   const reviews = Array.isArray(camper.reviews) ? camper.reviews : [];
//   const reviewCount = reviews.length;
//   const rating = camper.rating || 0; // Задати значення за замовчуванням для рейтингу

//   const handleHeartClick = () => {
//     setIsFavorite(!isFavorite);
//   };

//   const renderStars = () => {
//     const filledStars = Math.round(rating); // Кількість заповнених зірок
//     const emptyStars = 5 - filledStars; // Кількість порожніх зірок

//     return (
//       <>
//         {[...Array(filledStars)].map((_, index) => (
//           <AiFillStar key={`filled-${index}`} className={css.iconSize} />
//         ))}
//         {[...Array(emptyStars)].map((_, index) => (
//           <AiOutlineStar key={`empty-${index}`} className={css.iconSize} />
//         ))}
//       </>
//     );
//   };

//   return (
//     <div className={css.camperCard}>
//       <img src={camper.gallery[0]} alt={camper.name} className={css.imgCard} />

//       <div className={css.textCard}>
//         <div className={css.horizontContainer}>
//           <div className={css.iconPrice}>
//             <h2>{camper.name}</h2>
//           </div>

//           <div className={css.iconLocation}>
//             <h2>€{camper.price}</h2>
//             <button className={css.btnHeart} onClick={handleHeartClick}>
//               {isFavorite ? (
//                 <FaHeart className={css.iconSize} />
//               ) : (
//                 <FiHeart className={css.iconSize} />
//               )}
//             </button>
//           </div>
//         </div>

//         <div className={css.iconLocation}>
//           {renderStars()}
//           <p className={css.ratingText}>
//             {rating} ({reviewCount} reviews)
//           </p>
//           <p>{camper.location}</p>
//         </div>

//         <p className={css.description}>{camper.description}</p>

//         <div className={css.buttonBox}>
//           <button className={css.buttonText}>
//             <svg className={css.iconStyle}>
//               <use href="/src/components/images/icons.svg#icon-heart"></use>
//             </svg>
//             {camper.adults}
//           </button>
//           <button className={css.buttonText}>
//             <svg className={css.iconStyle}>
//               <use href="/src/components/images/icons.svg#icon-Container"></use>
//             </svg>
//             {camper.children}
//           </button>
//           <button className={css.buttonText}>
//             <svg className={css.iconStyle}>
//               <use href="/src/components/images/icons.svg#icon-Vector"></use>
//             </svg>
//             {camper.engine}
//           </button>
//           <button className={css.buttonText}>
//             <svg className={css.iconStyle}>
//               <use href="/src/components/images/icons.svg#icon-Container"></use>
//             </svg>
//             {camper.transmission}
//           </button>
//         </div>

//         <button type="submit" className={css.btnShowSearch}>
//           Show more
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CamperCard;
