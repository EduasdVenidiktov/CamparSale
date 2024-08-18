// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import Modal from "../Modal/ShowMore/Modal"; // Переконайтеся, що шлях правильний
// import { closeModal, openModal } from "../../redux/Modal/modalSlice";
import { openModal } from "../../redux/Modal/modalSlice";

// import { clearForm } from "../../redux/Modal/bookingSlice";
import CamperCard from "../CamperCard/CamperCard";

import css from "./CamperCardList.module.css";

const CamperCardList = ({ campers }) => {
  const dispatch = useDispatch();

  // Перевірка структури стану
  // const modalState = useSelector((state) => {
  //   console.log("State:", state); // Додайте цей рядок для перевірки структури стану
  //   return state.modal;
  // });

  // Переконайтесь, що modalState існує перед деструктуризацією
  // const isOpen = modalState ? modalState.isOpen : false;
  // const camper = modalState ? modalState.camper : null;

  const handleShowMore = (camper) => {
    dispatch(openModal(camper));
  };

  // const handleCloseModal = () => {
  //   dispatch(closeModal());
  //   dispatch(clearForm());
  // };

  // const handleBook = (formData) => {
  //   // Обробка бронювання тут
  //   console.log("Booking data:", formData);
  //   // Наприклад, ви можете відправити форму на сервер
  //   // axios.post('/api/bookings', formData)
  //   //   .then(response => {
  //   //     alert('Booking successful');
  //   //   })
  //   //   .catch(error => {
  //   //     alert('Booking failed');
  //   //   });
  // };

  return (
    <div>
      <div className={css.camperCardList}>
        {campers.map((camper) => (
          <CamperCard
            key={camper.id}
            camper={camper}
            onShowMore={() => handleShowMore(camper)}
          />
        ))}
      </div>
      {/* {isOpen && camper && (
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          camper={camper}
          onBook={handleBook}
        />
      )} */}
    </div>
  );
};

export default CamperCardList;
