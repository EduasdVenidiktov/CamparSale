// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import css from "./Modal.module.css";

// const Modal = ({ isOpen, onClose, camper, onBook }) => {
//   const [activeTab, setActiveTab] = useState("details");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     bookingDate: "",
//     comment: "",
//   });
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     const handleEsc = (e) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   if (!isOpen) return null;

//   const handleTabChange = (tab) => setActiveTab(tab);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Valid email is required";
//     if (!formData.bookingDate)
//       newErrors.bookingDate = "Booking date is required";

//     if (Object.keys(newErrors).length) {
//       setErrors(newErrors);
//       return;
//     }

//     setErrors({});
//     onBook(formData);
//     onClose();
//   };

//   return ReactDOM.createPortal(
//     <div className={css.backdrop} onClick={onClose}>
//       <div className={css.modal} onClick={(e) => e.stopPropagation()}>
//         <button className={css.closeBtn} onClick={onClose}>
//           ×
//         </button>
//         <div className={css.tabs}>
//           {["details", "reviews"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => handleTabChange(tab)}
//               className={activeTab === tab ? css.activeTab : ""}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>
//         {activeTab === "details" && camper && (
//           <div className={css.tabContent}>
//             <img
//               src={camper.gallery[0]}
//               alt={camper.name}
//               className={css.imgCard}
//             />
//             <h2>{camper.name}</h2>
//             <p>{camper.description}</p>
//             <p>Price: €{camper.price}</p>
//             <p>Rating: {camper.rating}</p>
//           </div>
//         )}
//         {activeTab === "reviews" && camper && (
//           <div className={css.tabContent}>
//             <h2>Reviews</h2>
//             {camper.reviews.map((review, index) => (
//               <div key={index} className={css.reviewItem}>
//                 <p>
//                   <strong>Rating:</strong> {review.rating}
//                 </p>
//                 <p>{review.content}</p>
//               </div>
//             ))}
//           </div>
//         )}
//         <form onSubmit={handleSubmit} className={css.bookingForm}>
//           {["name", "email", "bookingDate", "comment"].map((field) => (
//             <label key={field}>
//               {field.charAt(0).toUpperCase() + field.slice(1)}:
//               <input
//                 type={field === "bookingDate" ? "date" : "text"}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//               />
//               {errors[field] && (
//                 <span className={css.error}>{errors[field]}</span>
//               )}
//             </label>
//           ))}
//           <button type="submit">Book Now</button>
//         </form>
//       </div>
//     </div>,
//     document.body
//   );
// };

// export default Modal;
// //=============================================================
// // import { useState, useEffect } from "react";
// // import ReactDOM from "react-dom";
// // import css from "./Modal.module.css";

// // const Modal = ({ isOpen, onClose, camper, onBook }) => {
// //   const [activeTab, setActiveTab] = useState("details");
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     bookingDate: "",
// //     comment: "",
// //   });
// //   const [errors, setErrors] = useState({});

// //   useEffect(() => {
// //     const handleEsc = (e) => e.key === "Escape" && onClose();
// //     window.addEventListener("keydown", handleEsc);
// //     return () => window.removeEventListener("keydown", handleEsc);
// //   }, [onClose]);

// //   if (!isOpen) return null;

// //   const handleTabChange = (tab) => setActiveTab(tab);
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const newErrors = {};

// //     if (!formData.name) newErrors.name = "Name is required";
// //     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
// //       newErrors.email = "Valid email is required";
// //     if (!formData.bookingDate)
// //       newErrors.bookingDate = "Booking date is required";

// //     if (Object.keys(newErrors).length) {
// //       setErrors(newErrors);
// //       return;
// //     }

// //     setErrors({});
// //     onBook(formData);
// //     onClose();
// //   };

// //   return ReactDOM.createPortal(
// //     <div className={css.backdrop} onClick={onClose}>
// //       <div className={css.modal} onClick={(e) => e.stopPropagation()}>
// //         <button className={css.closeBtn} onClick={onClose}>
// //           ×
// //         </button>
// //         <div className={css.tabs}>
// //           {["details", "reviews"].map((tab) => (
// //             <button
// //               key={tab}
// //               onClick={() => handleTabChange(tab)}
// //               className={activeTab === tab ? css.activeTab : ""}
// //             >
// //               {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //             </button>
// //           ))}
// //         </div>
// //         {activeTab === "details" && (
// //           <div className={css.tabContent}>
// //             <img src={camper.img} alt={camper.name} />
// //             <h2>{camper.name}</h2>
// //             <p>{camper.description}</p>
// //             <p>Price: {camper.price}</p>
// //             <p>Rating: {camper.rating}</p>
// //           </div>
// //         )}
// //         {activeTab === "reviews" && (
// //           <div className={css.tabContent}>
// //             <h2>Reviews</h2>
// //             {/* Вставте відгуки про кампера тут */}
// //           </div>
// //         )}
// //         <form onSubmit={handleSubmit} className={css.bookingForm}>
// //           {["name", "email", "bookingDate", "comment"].map((field) => (
// //             <label key={field}>
// //               {field.charAt(0).toUpperCase() + field.slice(1)}:
// //               <input
// //                 type={field === "bookingDate" ? "date" : "text"}
// //                 name={field}
// //                 value={formData[field]}
// //                 onChange={handleChange}
// //               />
// //               {errors[field] && (
// //                 <span className={css.error}>{errors[field]}</span>
// //               )}
// //             </label>
// //           ))}
// //           <button type="submit">Book Now</button>
// //         </form>
// //       </div>
// //     </div>,
// //     document.body
// //   );
// // };

// // export default Modal;

// //=======================================================================================
// // import { useState, useEffect } from "react";
// // import ReactDOM from "react-dom";
// // import css from "./Modal.module.css";

// // const Modal = ({ isOpen, onClose, camper, onBook }) => {
// //   const [activeTab, setActiveTab] = useState("details");
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     bookingDate: "",
// //     comment: "",
// //   });
// //   const [errors, setErrors] = useState({});

// //   useEffect(() => {
// //     const handleEsc = (e) => {
// //       if (e.key === "Escape") onClose();
// //     };
// //     window.addEventListener("keydown", handleEsc);
// //     return () => window.removeEventListener("keydown", handleEsc);
// //   }, [onClose]);

// //   if (!isOpen) return null;

// //   const handleTabChange = (tab) => setActiveTab(tab);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const newErrors = {};

// //     if (!formData.name) newErrors.name = "Name is required";
// //     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
// //       newErrors.email = "Valid email is required";
// //     if (!formData.bookingDate)
// //       newErrors.bookingDate = "Booking date is required";

// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors);
// //       return;
// //     }

// //     setErrors({});
// //     onBook(formData);
// //     onClose();
// //   };

// //   // Функція для перетворення об'єкта в масив елементів для рендерингу
// //   const renderFeatures = (features) => {
// //     if (!features) return null;
// //     return Object.entries(features).map(([key, value]) => (
// //       <li key={key}>
// //         {key}: {String(value)}
// //       </li>
// //     ));
// //   };

// //   return ReactDOM.createPortal(
// //     <div className={css.backdrop} onClick={onClose}>
// //       <div className={css.modal} onClick={(e) => e.stopPropagation()}>
// //         <button className={css.closeBtn} onClick={onClose}>
// //           ×
// //         </button>
// //         <div className={css.tabs}>
// //           <button
// //             onClick={() => handleTabChange("details")}
// //             className={activeTab === "details" ? css.activeTab : ""}
// //           >
// //             Details
// //           </button>
// //           <button
// //             onClick={() => handleTabChange("reviews")}
// //             className={activeTab === "reviews" ? css.activeTab : ""}
// //           >
// //             Reviews
// //           </button>
// //         </div>
// //         {activeTab === "details" && (
// //           <div className={css.tabContent}>
// //             <h2>{camper.name}</h2>
// //             <p>{camper.details}</p>
// //             <ul>{renderFeatures(camper.features)}</ul>
// //           </div>
// //         )}
// //         {activeTab === "reviews" && (
// //           <div className={css.tabContent}>
// //             <h2>Reviews</h2>
// //             {/* Вставте відгуки про кампера тут */}
// //           </div>
// //         )}
// //         <form onSubmit={handleSubmit} className={css.bookingForm}>
// //           <label>
// //             Name:
// //             <input
// //               type="text"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //             />
// //             {errors.name && <span className={css.error}>{errors.name}</span>}
// //           </label>
// //           <label>
// //             Email:
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //             />
// //             {errors.email && <span className={css.error}>{errors.email}</span>}
// //           </label>
// //           <label>
// //             Booking Date:
// //             <input
// //               type="date"
// //               name="bookingDate"
// //               value={formData.bookingDate}
// //               onChange={handleChange}
// //             />
// //             {errors.bookingDate && (
// //               <span className={css.error}>{errors.bookingDate}</span>
// //             )}
// //           </label>
// //           <label>
// //             Comment:
// //             <textarea
// //               name="comment"
// //               value={formData.comment}
// //               onChange={handleChange}
// //             />
// //           </label>
// //           <button type="submit">Book Now</button>
// //         </form>
// //       </div>
// //     </div>,
// //     document.body
// //   );
// // };

// // export default Modal;
